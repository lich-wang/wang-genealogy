---
schema: wang-person/v1
id: p_DvsaKspxRerxZLHeLLb8JP
status: active
merged_into: null
display_name: 王景惠
cbdb_id: 285304
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8yHw3DnbfFUr57AoGgSM3n
        subject_person_id: p_DvsaKspxRerxZLHeLLb8JP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景惠，明人物。中国历代人物传记资料库（CBDB）以人物编号 285304 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zxsQpfHUc6eYp1dgzeayQ0
          claim_id: c_8yHw3DnbfFUr57AoGgSM3n
          source_id: s_VrU1a1CRdwaPsTAvoLd5fP
          stance: supports
          locator: CBDB:285304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VrU1a1CRdwaPsTAvoLd5fP
            source_type: api_record
            title: 中国历代人物传记资料库：王景惠（CBDB 285304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285304&o=json
            external_identifier: CBDB:285304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_175FxqKoU73umDGznF48aA
        subject_person_id: p_DvsaKspxRerxZLHeLLb8JP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_11mF1mCkKhztpTNN4i9GVx
          claim_id: c_175FxqKoU73umDGznF48aA
          source_id: s_VrU1a1CRdwaPsTAvoLd5fP
          stance: supports
          locator: CBDB:285304
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_VrU1a1CRdwaPsTAvoLd5fP
            source_type: api_record
            title: 中国历代人物传记资料库：王景惠（CBDB 285304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285304&o=json
            external_identifier: CBDB:285304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FgXHtqwHhit64ooI3LUg_r
        subject_person_id: p_DvsaKspxRerxZLHeLLb8JP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o9X4e64D4iKX33c4myBcBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SbSOKE0bKgbCD4c6jmIkyR
          claim_id: c_FgXHtqwHhit64ooI3LUg_r
          source_id: s_VrU1a1CRdwaPsTAvoLd5fP
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百一十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o9X4e64D4iKX33c4myBcBe
        status: active
        display_name: 王繼禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景惠，明人物。中国历代人物传记资料库（CBDB）以人物编号 285304 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王景惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_o9X4e64D4iKX33c4myBcBe | 王繼禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景惠（CBDB 285304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285304&o=json)
