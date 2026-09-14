---
schema: wang-person/v1
id: p_HRM7GsrH6RKGj5BRRsKgDG
status: active
merged_into: null
display_name: 王學讓
cbdb_id: 316266
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZM9UQ2Vhp4y4QH6y5SXKEW
        subject_person_id: p_HRM7GsrH6RKGj5BRRsKgDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學讓，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316266）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sqZYsa-60MzDEzfKG8kNiY
          claim_id: c_ZM9UQ2Vhp4y4QH6y5SXKEW
          source_id: s_3Uef35Hbg3Hpx86zRGcsvE
          stance: supports
          locator: CBDB:316266
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3Uef35Hbg3Hpx86zRGcsvE
            source_type: api_record
            title: 中国历代人物传记资料库：王學讓（CBDB 316266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json
            external_identifier: CBDB:316266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJ7KD1QnDPvmB7hXvk6BUZ
        subject_person_id: p_HRM7GsrH6RKGj5BRRsKgDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t8928QpQ6c39D4ytcc9KDn
          claim_id: c_AJ7KD1QnDPvmB7hXvk6BUZ
          source_id: s_3Uef35Hbg3Hpx86zRGcsvE
          stance: supports
          locator: CBDB:316266
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oi419_HCycLLJplcKzKxb0
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HRM7GsrH6RKGj5BRRsKgDG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvlv7JpHJrgmd-Vte6QnVa
          claim_id: c_oi419_HCycLLJplcKzKxb0
          source_id: s_HgD0Xxzrq68_JZ66XYjctx
          stance: supports
          locator: CBDB：兄弟 王學謨（204228）之父／母 王世卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王學讓 与 王學謨 为同胞（CBDB 记「兄」），王學謨 之父／母即 王學讓 之父／母。
          source:
            id: s_HgD0Xxzrq68_JZ66XYjctx
            source_type: api_record
            title: 中国历代人物传记资料库：王學讓（CBDB 316266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json
            external_identifier: CBDB:316266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CTanKyckA8Emf57Dk1Jm7o
        status: active
        display_name: 王世卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TpgQtvfLWCIJoGdfZ7TicC
        subject_person_id: p_HRM7GsrH6RKGj5BRRsKgDG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35d2gt0bAw9MkVDi__0osl
          claim_id: c_TpgQtvfLWCIJoGdfZ7TicC
          source_id: s_HgD0Xxzrq68_JZ66XYjctx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HgD0Xxzrq68_JZ66XYjctx
            source_type: api_record
            title: 中国历代人物传记资料库：王學讓（CBDB 316266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json
            external_identifier: CBDB:316266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nxMTBwovWR92XT8tAZTvLW
        status: active
        display_name: 王學謨
        merged_into_person_id: null
---

# 王學讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學讓，明人物。嘉靖三十二年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 316266） | accepted |
| name.primary | 王學讓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CTanKyckA8Emf57Dk1Jm7o | 王世卿 | accepted |
| other | p_nxMTBwovWR92XT8tAZTvLW | 王學謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學讓（CBDB 316266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json)
