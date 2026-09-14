---
schema: wang-person/v1
id: p_3LbFqpm1y41GseX5pd88Pr
status: active
merged_into: null
display_name: 王鈿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hsjbxh64CthhU3LiAWSkDS
        subject_person_id: p_3LbFqpm1y41GseX5pd88Pr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WNEaaCJ9GqfKW2vdTexP5P
          claim_id: c_hsjbxh64CthhU3LiAWSkDS
          source_id: s_hD4ELbD3Ru1YamgB3QKoMz
          stance: supports
          locator: CBDB:212641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212641）
          source: &a1
            id: s_hD4ELbD3Ru1YamgB3QKoMz
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 212641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json
            external_identifier: CBDB:212641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NwFaemSgdES3K9sBQzmT5J
        subject_person_id: p_3LbFqpm1y41GseX5pd88Pr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈿，明人物。萬曆二年進士，籍贯壽張，入仕監生。（中国历代人物传记资料库 CBDB 212641）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aRVP3nY8k49E0v-x9A3Ik4
          claim_id: c_NwFaemSgdES3K9sBQzmT5J
          source_id: s_hD4ELbD3Ru1YamgB3QKoMz
          stance: supports
          locator: CBDB:212641
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fmUjcjgNsLItrbVo-HRtL6
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3LbFqpm1y41GseX5pd88Pr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kA2eYlhuh77wyEgMYzPGHu
          claim_id: c_fmUjcjgNsLItrbVo-HRtL6
          source_id: s_TE73UzqivWC4FUf3b7OTYE
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈿 与 王錄 为同胞（CBDB 记「弟」），王錄 之父／母即 王鈿 之父／母。
          source:
            id: s_TE73UzqivWC4FUf3b7OTYE
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 212641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json
            external_identifier: CBDB:212641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XSyusiB7GXwQNmzrNDUf4
        status: active
        display_name: 王謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a-o3WKdlgcBH48Rz5rXomF
        subject_person_id: p_3LbFqpm1y41GseX5pd88Pr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x53Evw4qK17FfkpTs4A7nY
          claim_id: c_a-o3WKdlgcBH48Rz5rXomF
          source_id: s_TE73UzqivWC4FUf3b7OTYE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TE73UzqivWC4FUf3b7OTYE
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 212641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json
            external_identifier: CBDB:212641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
---

# 王鈿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈿 | accepted |
| bio.summary | 王鈿，明人物。萬曆二年進士，籍贯壽張，入仕監生。（中国历代人物传记资料库 CBDB 212641） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1XSyusiB7GXwQNmzrNDUf4 | 王謙 | accepted |
| other | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈿（CBDB 212641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json)
