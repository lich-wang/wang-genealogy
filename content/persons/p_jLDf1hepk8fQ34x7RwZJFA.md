---
schema: wang-person/v1
id: p_jLDf1hepk8fQ34x7RwZJFA
status: active
merged_into: null
display_name: 王鼎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H9FPn3sA44J7AY8vgwBqjU
        subject_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7KELqcvB549w6GhztoNER
          claim_id: c_H9FPn3sA44J7AY8vgwBqjU
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: CBDB:201938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201938）
          source: &a1
            id: s_ATpo2LhfLVj3EbJKGTwGF6
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 201938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201938&o=json
            external_identifier: CBDB:201938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pRv4gVJkRM9rJr6EtQEpkV
        subject_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CvGPNsHMnPQGsHVT2E8Gb9
          claim_id: c_pRv4gVJkRM9rJr6EtQEpkV
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KmJP3KwQ4RoovKcKUhtGaX
        subject_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎（生于1484年），明人物。明清進士進士，籍贯汝州，入仕進士。（中国历代人物传记资料库 CBDB 201938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1cfFAoPyUzpvwPMsqRKboe
          claim_id: c_KmJP3KwQ4RoovKcKUhtGaX
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: CBDB:201938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_geu1u0bCg7WmxyPNkeQYwD
        subject_person_id: p_ndUPFgXA4WV6RGNp8txMx4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ik6yt1RMQDk-be0_WwPuQA
          claim_id: c_geu1u0bCg7WmxyPNkeQYwD
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ndUPFgXA4WV6RGNp8txMx4
        status: active
        display_name: 王欽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tWDg2xN1utsG1q3WYNiuaH
        subject_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_o7nv8rEUrKoKgzxhujrYnN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6K0eE-bknvwkS3OgW1Luh
          claim_id: c_tWDg2xN1utsG1q3WYNiuaH
          source_id: s_irLdgX3-c1fjuhV4WzxEkH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_irLdgX3-c1fjuhV4WzxEkH
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王鼎妻)（CBDB 280833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280833&o=json
            external_identifier: CBDB:280833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o7nv8rEUrKoKgzxhujrYnN
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_sY1JD4A8QKLWDDrZHMSLfv
        subject_person_id: p_rUVvZ33nQ4MdqGzTqRnq6c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBXdtDej7z69D_2FYwjMdi
          claim_id: c_sY1JD4A8QKLWDDrZHMSLfv
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rUVvZ33nQ4MdqGzTqRnq6c
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_l3aFaVevieqZczlx4IANEV
        subject_person_id: p_mps1qECYgUC1C9UWdUCvL5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTzSAmRVg8WPYw-h828RKs
          claim_id: c_l3aFaVevieqZczlx4IANEV
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mps1qECYgUC1C9UWdUCvL5
        status: active
        display_name: 王文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | 王鼎（生于1484年），明人物。明清進士進士，籍贯汝州，入仕進士。（中国历代人物传记资料库 CBDB 201938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ndUPFgXA4WV6RGNp8txMx4 | 王欽 | accepted |
| spouses | p_o7nv8rEUrKoKgzxhujrYnN | 周氏 | accepted |
| ancestors | p_rUVvZ33nQ4MdqGzTqRnq6c | 王振 | accepted |
| ancestors | p_mps1qECYgUC1C9UWdUCvL5 | 王文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 201938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201938&o=json)
- [中国历代人物传记资料库：周氏(王鼎妻)（CBDB 280833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280833&o=json)
