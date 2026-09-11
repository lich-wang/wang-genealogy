---
schema: wang-person/v1
id: p_r8jMTz5d8EtW5WnsB75BCx
status: active
merged_into: null
display_name: 王景齊
cbdb_id: 22146
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wMfVP29Y4fAzgw1bQRQkZK
        subject_person_id: p_r8jMTz5d8EtW5WnsB75BCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景齊，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22146 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_5QjHAX3Oumx4y2ZHhcFq4w
          claim_id: c_wMfVP29Y4fAzgw1bQRQkZK
          source_id: s_ojpLBqKD7Y9RMrycbHsW3K
          stance: supports
          locator: CBDB:22146
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_ojpLBqKD7Y9RMrycbHsW3K
            source_type: api_record
            title: 中国历代人物传记资料库：王景齊（CBDB 22146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22146&o=json
            external_identifier: CBDB:22146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_goW22rEVbA94AfvdD72cUE
        subject_person_id: p_r8jMTz5d8EtW5WnsB75BCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gLUUEAGVK7Jq41HNXsQ82C
          claim_id: c_goW22rEVbA94AfvdD72cUE
          source_id: s_ojpLBqKD7Y9RMrycbHsW3K
          stance: supports
          locator: CBDB:22146
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_ojpLBqKD7Y9RMrycbHsW3K
            source_type: api_record
            title: 中国历代人物传记资料库：王景齊（CBDB 22146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22146&o=json
            external_identifier: CBDB:22146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SSsoekBtD6ZfEYfXKNsd4A
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r8jMTz5d8EtW5WnsB75BCx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VuVhu6p31EzYaEIb8tQeft
          claim_id: c_SSsoekBtD6ZfEYfXKNsd4A
          source_id: s_zMU8ad3Vq7W4ersGKrjYcB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1923;1924：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zMU8ad3Vq7W4ersGKrjYcB
            source_type: api_record
            title: 中国历代人物传记资料库：王保大（CBDB 22145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json
            external_identifier: CBDB:22145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4ZFWTE12ciF8FWWzCr37vg
        status: active
        display_name: 王保大
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景齊，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22146 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王景齊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4ZFWTE12ciF8FWWzCr37vg | 王保大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保大（CBDB 22145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json)
- [中国历代人物传记资料库：王景齊（CBDB 22146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22146&o=json)
