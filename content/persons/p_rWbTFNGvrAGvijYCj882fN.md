---
schema: wang-person/v1
id: p_rWbTFNGvrAGvijYCj882fN
status: active
merged_into: null
display_name: 王夢龍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gjzRipqMw4Ac1GPjfB3B9y
        subject_person_id: p_rWbTFNGvrAGvijYCj882fN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8cbXwLdQ2jjoRb2XpfKDEo
          claim_id: c_gjzRipqMw4Ac1GPjfB3B9y
          source_id: s_vjrNWPC6LYvanVSuSL5GNC
          stance: supports
          locator: CBDB:291533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291533）
          source: &a1
            id: s_vjrNWPC6LYvanVSuSL5GNC
            source_type: api_record
            title: 中国历代人物传记资料库：王夢龍（CBDB 291533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291533&o=json
            external_identifier: CBDB:291533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hrR35RFtZLvBEYgVwhpf1d
        subject_person_id: p_rWbTFNGvrAGvijYCj882fN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢龍，明人物。嘉靖十一年進士，籍贯錢塘，曾任守備、學正。（中国历代人物传记资料库 CBDB 291533）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LU4ITEoDwZSv9bsXicIZCZ
          claim_id: c_hrR35RFtZLvBEYgVwhpf1d
          source_id: s_vjrNWPC6LYvanVSuSL5GNC
          stance: supports
          locator: CBDB:291533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Zj_hTxJHqT0YpGUsYUdoDa
        subject_person_id: p_1R7tJCQnDzHJMgdYcvFf8v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rWbTFNGvrAGvijYCj882fN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vt_p68HNPom3lR2Zw9Wfgw
          claim_id: c_Zj_hTxJHqT0YpGUsYUdoDa
          source_id: s_Z2FLbe9bQgBZm3cMUB3yFn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z2FLbe9bQgBZm3cMUB3yFn
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 202645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202645&o=json
            external_identifier: CBDB:202645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1R7tJCQnDzHJMgdYcvFf8v
        status: active
        display_name: 王椿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢龍 | accepted |
| bio.summary | 王夢龍，明人物。嘉靖十一年進士，籍贯錢塘，曾任守備、學正。（中国历代人物传记资料库 CBDB 291533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1R7tJCQnDzHJMgdYcvFf8v | 王椿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 202645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202645&o=json)
- [中国历代人物传记资料库：王夢龍（CBDB 291533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291533&o=json)
