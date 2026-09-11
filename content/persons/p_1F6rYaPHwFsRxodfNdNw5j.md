---
schema: wang-person/v1
id: p_1F6rYaPHwFsRxodfNdNw5j
status: active
merged_into: null
display_name: 王仁肅
cbdb_id: 150800
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SuaLjEA6jFLQBcAMn7AMS1
        subject_person_id: p_1F6rYaPHwFsRxodfNdNw5j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁肅，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150800 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_6M6an1TN95Y_mkhG8eBPLd
          claim_id: c_SuaLjEA6jFLQBcAMn7AMS1
          source_id: s_7ei9Xn1tSR21698LMsTax9
          stance: supports
          locator: CBDB:150800
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_7ei9Xn1tSR21698LMsTax9
            source_type: api_record
            title: 中国历代人物传记资料库：王仁肅（CBDB 150800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150800&o=json
            external_identifier: CBDB:150800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1kUhwsa8f7Lo8fL1Tmms8
        subject_person_id: p_1F6rYaPHwFsRxodfNdNw5j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_s1RZ9eFxBKD2Hch16Z8JUK
          claim_id: c_m1kUhwsa8f7Lo8fL1Tmms8
          source_id: s_7ei9Xn1tSR21698LMsTax9
          stance: supports
          locator: CBDB:150800
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_7ei9Xn1tSR21698LMsTax9
            source_type: api_record
            title: 中国历代人物传记资料库：王仁肅（CBDB 150800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150800&o=json
            external_identifier: CBDB:150800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zjEn62kmwJ3u3du8WksN9n
        subject_person_id: p_nDu4qJEiukeRG7e3WQMWCW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1F6rYaPHwFsRxodfNdNw5j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwOjmf7smKOH8lKRmcFkGM
          claim_id: c_zjEn62kmwJ3u3du8WksN9n
          source_id: s_cTLz7KW3XKKs5XdbHWg21v
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 26：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cTLz7KW3XKKs5XdbHWg21v
            source_type: api_record
            title: 中国历代人物传记资料库：王感（CBDB 140253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140253&o=json
            external_identifier: CBDB:140253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nDu4qJEiukeRG7e3WQMWCW
        status: active
        display_name: 王感
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁肅，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150800 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仁肅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nDu4qJEiukeRG7e3WQMWCW | 王感 | accepted |

## 外部来源

- [中国历代人物传记资料库：王感（CBDB 140253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140253&o=json)
- [中国历代人物传记资料库：王仁肅（CBDB 150800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150800&o=json)
