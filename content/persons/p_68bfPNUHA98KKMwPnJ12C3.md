---
schema: wang-person/v1
id: p_68bfPNUHA98KKMwPnJ12C3
status: active
merged_into: null
display_name: 王謙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GhPHavNNBgLhxcPrmubqJt
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RbC3tMVoKoRV8TdPZ7c1BM
          claim_id: c_GhPHavNNBgLhxcPrmubqJt
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: CBDB:124982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124982）
          source: &a1
            id: s_HXFJiTCNt1A5HD2f7yj48e
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 124982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json
            external_identifier: CBDB:124982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H9F85DcWMqAKGfXATCRUGM
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，明人物。明清進士進士，籍贯蒲州，入仕進士，曾任兵部武庫司郎中、太僕寺少卿。（中国历代人物传记资料库 CBDB 124982）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QFp37L0X8bERzLbv9NBEUp
          claim_id: c_H9F85DcWMqAKGfXATCRUGM
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: CBDB:124982
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1NDRlcLlQpXVJoy7_kUuF5
        subject_person_id: p_uRxHoeETPENUnB4UpGZ636
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvbsKpU1r9rlDHokifAAo5
          claim_id: c_1NDRlcLlQpXVJoy7_kUuF5
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uRxHoeETPENUnB4UpGZ636
        status: active
        display_name: 王崇古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fw12tkpDhDinMIl9-wix2f
        subject_person_id: p_68bfPNUHA98KKMwPnJ12C3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8cxn7qhC9RcaoQ98GdxCBt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpr3q--43KQkJIGyc_c38Y
          claim_id: c_fw12tkpDhDinMIl9-wix2f
          source_id: s_jO2YNPSM6wvoRobLYVhJjT
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jO2YNPSM6wvoRobLYVhJjT
            source_type: api_record
            title: 中国历代人物传记资料库：史氏(王謙妻)（CBDB 215868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215868&o=json
            external_identifier: CBDB:215868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8cxn7qhC9RcaoQ98GdxCBt
        status: active
        display_name: 史氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HXq9K3Gi3z30lVX15wdLgt
        subject_person_id: p_n3VXQL5pitaZ4dih84qWf8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2ejinfs5fCpdAbYogRzYI
          claim_id: c_HXq9K3Gi3z30lVX15wdLgt
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n3VXQL5pitaZ4dih84qWf8
        status: active
        display_name: 王馨
        merged_into_person_id: null
    - claim:
        id: c_YrWR8A5JcuTl1RBg1A07kl
        subject_person_id: p_WV7ubqMfsAHuJnpcg7NTN2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_df9_UvqVUCgJFzvDEeHOLz
          claim_id: c_YrWR8A5JcuTl1RBg1A07kl
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WV7ubqMfsAHuJnpcg7NTN2
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，明人物。明清進士進士，籍贯蒲州，入仕進士，曾任兵部武庫司郎中、太僕寺少卿。（中国历代人物传记资料库 CBDB 124982） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uRxHoeETPENUnB4UpGZ636 | 王崇古 | accepted |
| spouses | p_8cxn7qhC9RcaoQ98GdxCBt | 史氏 | accepted |
| ancestors | p_n3VXQL5pitaZ4dih84qWf8 | 王馨 | accepted |
| ancestors | p_WV7ubqMfsAHuJnpcg7NTN2 | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：史氏(王謙妻)（CBDB 215868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215868&o=json)
- [中国历代人物传记资料库：王謙（CBDB 124982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json)
