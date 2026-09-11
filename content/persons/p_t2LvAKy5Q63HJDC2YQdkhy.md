---
schema: wang-person/v1
id: p_t2LvAKy5Q63HJDC2YQdkhy
status: active
merged_into: null
display_name: 王昭遜
cbdb_id: 21983
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1DjwB8p5b22PQUbtMVEUeK
        subject_person_id: p_t2LvAKy5Q63HJDC2YQdkhy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遜，宋人物。中国历代人物传记资料库（CBDB）以人物编号 21983 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_qBrgr-GOGAZ8lupejv_zTr
          claim_id: c_1DjwB8p5b22PQUbtMVEUeK
          source_id: s_uCo7QLyddsr3nGZffvFrjR
          stance: supports
          locator: CBDB:21983
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_uCo7QLyddsr3nGZffvFrjR
            source_type: api_record
            title: 中国历代人物传记资料库：王昭遜（CBDB 21983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21983&o=json
            external_identifier: CBDB:21983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2nJL87iYgisdcdbWue8gd
        subject_person_id: p_t2LvAKy5Q63HJDC2YQdkhy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PmCSd5JGKYq3K73DSvvf5S
          claim_id: c_P2nJL87iYgisdcdbWue8gd
          source_id: s_uCo7QLyddsr3nGZffvFrjR
          stance: supports
          locator: CBDB:21983
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_uCo7QLyddsr3nGZffvFrjR
            source_type: api_record
            title: 中国历代人物传记资料库：王昭遜（CBDB 21983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21983&o=json
            external_identifier: CBDB:21983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4OBzjIJhBNgPY3kJu6BO11
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t2LvAKy5Q63HJDC2YQdkhy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jDFRvBrxLHN0HfWQlAalrv
          claim_id: c_4OBzjIJhBNgPY3kJu6BO11
          source_id: s_uC4WJXKbFJAC7KghSUo3CJ
          stance: supports
          locator: CBDB 双向互证（子 王昭遜 ⇄ 父 王繼昇）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_uC4WJXKbFJAC7KghSUo3CJ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼昇（CBDB 1780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1780&o=json
            external_identifier: CBDB:1780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.241Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KdcqPruLqAjHwvyr7gXGsW
        status: active
        display_name: 王繼昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭遜，宋人物。中国历代人物传记资料库（CBDB）以人物编号 21983 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王昭遜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KdcqPruLqAjHwvyr7gXGsW | 王繼昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼昇（CBDB 1780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1780&o=json)
- [中国历代人物传记资料库：王昭遜（CBDB 21983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21983&o=json)
