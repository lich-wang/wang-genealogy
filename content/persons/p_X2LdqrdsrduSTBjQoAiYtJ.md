---
schema: wang-person/v1
id: p_X2LdqrdsrduSTBjQoAiYtJ
status: active
merged_into: null
display_name: 王文楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5BcxT3mEc4BcHFxo3Yt5C9
        subject_person_id: p_X2LdqrdsrduSTBjQoAiYtJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9bFSrKHJ3qMxwr7aAFKLYp
          claim_id: c_5BcxT3mEc4BcHFxo3Yt5C9
          source_id: s_PQ3xwnTUmLwgWGrCKWSkoQ
          stance: supports
          locator: CBDB:638236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638236）
          source: &a1
            id: s_PQ3xwnTUmLwgWGrCKWSkoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文楷（CBDB 638236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638236&o=json
            external_identifier: CBDB:638236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Uu4174GoNri5tMkF1LU9TV
        subject_person_id: p_X2LdqrdsrduSTBjQoAiYtJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文楷，清人物。籍贯武昌，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638236）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZJkaEnKd0k_mBQNgRLSLnh
          claim_id: c_Uu4174GoNri5tMkF1LU9TV
          source_id: s_PQ3xwnTUmLwgWGrCKWSkoQ
          stance: supports
          locator: CBDB:638236
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
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

# 王文楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文楷 | accepted |
| bio.summary | 王文楷，清人物。籍贯武昌，入仕縣學附生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文楷（CBDB 638236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638236&o=json)
