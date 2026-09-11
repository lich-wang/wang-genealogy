---
schema: wang-person/v1
id: p_MpRHKYQgMhyeJ8uJAKZD2Z
status: active
merged_into: null
display_name: 王榮貴
cbdb_id: 221573
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nzBNfSNbTeRK3bQTkD6hUc
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮貴，明人物。中国历代人物传记资料库（CBDB）以人物编号 221573 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_fs0ZEklrZ1MaPjyeIrDr0R
          claim_id: c_nzBNfSNbTeRK3bQTkD6hUc
          source_id: s_B4nFLqoT8yYgZs6KPb26Ey
          stance: supports
          locator: CBDB:221573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_B4nFLqoT8yYgZs6KPb26Ey
            source_type: api_record
            title: 中国历代人物传记资料库：王榮貴（CBDB 221573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221573&o=json
            external_identifier: CBDB:221573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nArLBEgdDNHJ1Eu58wi65A
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J3xwZxVVh162KYHj3Pdqmy
          claim_id: c_nArLBEgdDNHJ1Eu58wi65A
          source_id: s_B4nFLqoT8yYgZs6KPb26Ey
          stance: supports
          locator: CBDB:221573
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_B4nFLqoT8yYgZs6KPb26Ey
            source_type: api_record
            title: 中国历代人物传记资料库：王榮貴（CBDB 221573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221573&o=json
            external_identifier: CBDB:221573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OLEqWglKs3uqEz2QdivYXW
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YmLQFt9Hy_cWZ0KRiM0r6u
          claim_id: c_OLEqWglKs3uqEz2QdivYXW
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_USNXCoUtmKiaD7MqB2q9Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 126851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json
            external_identifier: CBDB:126851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王榮貴，明人物。中国历代人物传记资料库（CBDB）以人物编号 221573 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王榮貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮貴（CBDB 221573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221573&o=json)
- [中国历代人物传记资料库：王應麟（CBDB 126851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json)
