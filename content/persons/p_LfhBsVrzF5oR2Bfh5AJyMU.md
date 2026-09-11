---
schema: wang-person/v1
id: p_LfhBsVrzF5oR2Bfh5AJyMU
status: active
merged_into: null
display_name: 王延階
cbdb_id: 233448
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eEiN4UPq9ruKbzqbHEbE7p
        subject_person_id: p_LfhBsVrzF5oR2Bfh5AJyMU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延階，明人物。中国历代人物传记资料库（CBDB）以人物编号 233448 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_VLhfms4q-6hiIZLzj7LvkK
          claim_id: c_eEiN4UPq9ruKbzqbHEbE7p
          source_id: s_a1b8nFNbRT21XAJeARi3V3
          stance: supports
          locator: CBDB:233448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_a1b8nFNbRT21XAJeARi3V3
            source_type: api_record
            title: 中国历代人物传记资料库：王延階（CBDB 233448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233448&o=json
            external_identifier: CBDB:233448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NeK2rNK2NzJAtYMD6rPD9X
        subject_person_id: p_LfhBsVrzF5oR2Bfh5AJyMU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延階
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dmcnNqMACLgLGf38Z3EDYN
          claim_id: c_NeK2rNK2NzJAtYMD6rPD9X
          source_id: s_a1b8nFNbRT21XAJeARi3V3
          stance: supports
          locator: CBDB:233448
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_a1b8nFNbRT21XAJeARi3V3
            source_type: api_record
            title: 中国历代人物传记资料库：王延階（CBDB 233448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233448&o=json
            external_identifier: CBDB:233448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WWkykVfvpfiGX55la_UPZR
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LfhBsVrzF5oR2Bfh5AJyMU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NccfNspvWXz2nm7fqoRMHz
          claim_id: c_WWkykVfvpfiGX55la_UPZR
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延階

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延階，明人物。中国历代人物传记资料库（CBDB）以人物编号 233448 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王延階 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
- [中国历代人物传记资料库：王延階（CBDB 233448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233448&o=json)
