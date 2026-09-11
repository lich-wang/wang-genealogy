---
schema: wang-person/v1
id: p_cgcopFuwohNvMjfdh6p7AV
status: active
merged_into: null
display_name: 王道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QDLkmLRrqQQhJkrQGzD84Z
        subject_person_id: p_cgcopFuwohNvMjfdh6p7AV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FTpU4pRDFSQNaLkbTaXTwM
          claim_id: c_QDLkmLRrqQQhJkrQGzD84Z
          source_id: s_DMVzefLQS3hwKQziH7Cckx
          stance: supports
          locator: CBDB:162673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162673）
          source: &a1
            id: s_DMVzefLQS3hwKQziH7Cckx
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 162673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162673&o=json
            external_identifier: CBDB:162673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yL5D5hpaTPfm3Zksieqv4b
        subject_person_id: p_cgcopFuwohNvMjfdh6p7AV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，南北朝人物。籍贯芒山。（中国历代人物传记资料库 CBDB 162673）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ntKHGue-ZdEvEUPZh3a0_t
          claim_id: c_yL5D5hpaTPfm3Zksieqv4b
          source_id: s_DMVzefLQS3hwKQziH7Cckx
          stance: supports
          locator: CBDB:162673
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wipAsxYyHT_XOzwTvJwWpe
        subject_person_id: p_cgcopFuwohNvMjfdh6p7AV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ezoqNyKPzEEBv6n4AdQEFy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MRQQm70sTsdmr0Mh7ZdU5W
          claim_id: c_wipAsxYyHT_XOzwTvJwWpe
          source_id: s_DMVzefLQS3hwKQziH7Cckx
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ezoqNyKPzEEBv6n4AdQEFy
        status: active
        display_name: 王安
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，南北朝人物。籍贯芒山。（中国历代人物传记资料库 CBDB 162673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ezoqNyKPzEEBv6n4AdQEFy | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 162673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162673&o=json)
