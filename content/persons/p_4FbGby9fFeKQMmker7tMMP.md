---
schema: wang-person/v1
id: p_4FbGby9fFeKQMmker7tMMP
status: active
merged_into: null
display_name: 王珩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qn8Sg4DHM4hK1HbWS4uE5P
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mfGcXguHjpTBmweLKzqWsB
          claim_id: c_qn8Sg4DHM4hK1HbWS4uE5P
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: CBDB:126638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126638）
          source: &a1
            id: s_MUxq2FyJ4QRyAx99MTCU4A
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 126638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json
            external_identifier: CBDB:126638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRmwZvhMyJapajhZff9SJ2
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，明人物。明清進士進士，籍贯趙州，入仕進士。（中国历代人物传记资料库 CBDB 126638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E7T650XJURQOViSqnEcFHY
          claim_id: c_PRmwZvhMyJapajhZff9SJ2
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: CBDB:126638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6NT56CaO4mSUIh9ohCmHin
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hX4-w4ITQ9FCfwCGtBCj3
          claim_id: c_6NT56CaO4mSUIh9ohCmHin
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f7t9X2kJV7EUtQDpi6JhvW
        status: active
        display_name: 王惟政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Z9Hlf7oj7dssCCarSFaIRz
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VFPXej8xVczUGDDcED8GoL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iynOQc8x97jyia2mHUeV71
          claim_id: c_Z9Hlf7oj7dssCCarSFaIRz
          source_id: s_aWweyHrjXQ3LfAzwVFY3xX
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aWweyHrjXQ3LfAzwVFY3xX
            source_type: api_record
            title: 中国历代人物传记资料库：牟氏(王珩妻)（CBDB 250450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250450&o=json
            external_identifier: CBDB:250450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VFPXej8xVczUGDDcED8GoL
        status: active
        display_name: 牟氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XuET9YqkCUvX67n1AtMo2a
        subject_person_id: p_j1wUhScLR6C7kS8y5jb1Dh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HA6AwfTqgryaToBvgbSNNh
          claim_id: c_XuET9YqkCUvX67n1AtMo2a
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j1wUhScLR6C7kS8y5jb1Dh
        status: active
        display_name: 王成甫
        merged_into_person_id: null
    - claim:
        id: c_pRFxPcT9hMkmSWDx1gAOqX
        subject_person_id: p_5irbCXc8aiHfE8e3NuCuzA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qRV3UNdx1MjKJqFJgpL8sH
          claim_id: c_pRFxPcT9hMkmSWDx1gAOqX
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5irbCXc8aiHfE8e3NuCuzA
        status: active
        display_name: 王翥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，明人物。明清進士進士，籍贯趙州，入仕進士。（中国历代人物传记资料库 CBDB 126638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f7t9X2kJV7EUtQDpi6JhvW | 王惟政 | accepted |
| spouses | p_VFPXej8xVczUGDDcED8GoL | 牟氏 | accepted |
| ancestors | p_j1wUhScLR6C7kS8y5jb1Dh | 王成甫 | accepted |
| ancestors | p_5irbCXc8aiHfE8e3NuCuzA | 王翥 | accepted |

## 外部来源

- [中国历代人物传记资料库：牟氏(王珩妻)（CBDB 250450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250450&o=json)
- [中国历代人物传记资料库：王珩（CBDB 126638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json)
