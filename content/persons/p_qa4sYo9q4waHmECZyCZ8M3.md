---
schema: wang-person/v1
id: p_qa4sYo9q4waHmECZyCZ8M3
status: active
merged_into: null
display_name: 王文
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUpF4ppimupH8WhWFPCvzf
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。CBDB 记录其曾任通判、承德郎。中国历代人物传记资料库（CBDB）以人物编号 288333 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fkUDx6tPBcst4c1RCt7cn9
          claim_id: c_UUpF4ppimupH8WhWFPCvzf
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
            source_type: api_record
            title: 维基数据：王文（Q45449706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449706
            external_identifier: Q45449706
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_p0vpRGIW1f5-vhyfbsidsH
          claim_id: c_UUpF4ppimupH8WhWFPCvzf
          source_id: s_ggPMxgP9MUw47QUWi5DSum
          stance: supports
          locator: CBDB:288333
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ggPMxgP9MUw47QUWi5DSum
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文（288333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288333&o=json
            external_identifier: CBDB:288333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.641Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6V2pihvV9YWBjxejATbdnY
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LKa2M395B6Z6rB2GD2TYt9
          claim_id: c_6V2pihvV9YWBjxejATbdnY
          source_id: s_ggPMxgP9MUw47QUWi5DSum
          stance: supports
          locator: Q45449706
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jztWBg5q5Ko3iqJA3BQrKn
          claim_id: c_6V2pihvV9YWBjxejATbdnY
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: Q45449706
          quotation: null
          interpretation_note: null
          source:
            id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
            source_type: api_record
            title: 维基数据：王文（Q45449706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449706
            external_identifier: Q45449706
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文，明人物。CBDB 记录其曾任通判、承德郎。中国历代人物传记资料库（CBDB）以人物编号 288333 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王文（Q45449706）](https://www.wikidata.org/wiki/Q45449706)
- [CBDB 中国历代人物传记资料库：王文（288333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288333&o=json)
