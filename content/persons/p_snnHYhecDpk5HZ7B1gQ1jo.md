---
schema: wang-person/v1
id: p_snnHYhecDpk5HZ7B1gQ1jo
status: active
merged_into: null
display_name: 王琏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_puEVvtdHm1HQ7VzYj7wwo4
        subject_person_id: p_snnHYhecDpk5HZ7B1gQ1jo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琏，明人物。CBDB 记录其曾任知縣。中国历代人物传记资料库（CBDB）以人物编号 262448 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9Fa4XDPEB5sZ6pAo6SkiES
          claim_id: c_puEVvtdHm1HQ7VzYj7wwo4
          source_id: s_BpgY9e7UVYQnxYEkXLzmPM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_BpgY9e7UVYQnxYEkXLzmPM
            source_type: api_record
            title: 维基数据：王琏（Q45476476）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476476
            external_identifier: Q45476476
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_iw-ADZlTqH9j3TlTLAgBII
          claim_id: c_puEVvtdHm1HQ7VzYj7wwo4
          source_id: s_DHxbCYxtaCe68J8c6sVc2U
          stance: supports
          locator: CBDB:262448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DHxbCYxtaCe68J8c6sVc2U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璉（262448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262448&o=json
            external_identifier: CBDB:262448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.633Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nbVb2NUiKfiWWi5fduJ7ms
        subject_person_id: p_snnHYhecDpk5HZ7B1gQ1jo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GeY4QDW3bBE7zbYnM38jq9
          claim_id: c_nbVb2NUiKfiWWi5fduJ7ms
          source_id: s_DHxbCYxtaCe68J8c6sVc2U
          stance: supports
          locator: Q45476476
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_pdLWNTiwwB242ThFECYpuB
          claim_id: c_nbVb2NUiKfiWWi5fduJ7ms
          source_id: s_BpgY9e7UVYQnxYEkXLzmPM
          stance: supports
          locator: Q45476476
          quotation: null
          interpretation_note: null
          source:
            id: s_BpgY9e7UVYQnxYEkXLzmPM
            source_type: api_record
            title: 维基数据：王琏（Q45476476）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45476476
            external_identifier: Q45476476
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

# 王琏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琏，明人物。CBDB 记录其曾任知縣。中国历代人物传记资料库（CBDB）以人物编号 262448 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王琏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王琏（Q45476476）](https://www.wikidata.org/wiki/Q45476476)
- [CBDB 中国历代人物传记资料库：王璉（262448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262448&o=json)
