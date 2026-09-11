---
schema: wang-person/v1
id: p_1tCSH4qvU8Gxs2zqiHmkFr
status: active
merged_into: null
display_name: 王鼎汾
cbdb_id: 526843
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xSHNNej9uSFCGvpEWcW4S5
        subject_person_id: p_1tCSH4qvU8Gxs2zqiHmkFr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎汾，清人物。中国历代人物传记资料库（CBDB）以人物编号 526843 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_gegR1FJw6ZXMWZ17ervHMb
          claim_id: c_xSHNNej9uSFCGvpEWcW4S5
          source_id: s_HDt8grmr2fXh1fuMQwwNNr
          stance: supports
          locator: CBDB:526843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HDt8grmr2fXh1fuMQwwNNr
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎汾（CBDB 526843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526843&o=json
            external_identifier: CBDB:526843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mey6Z2WRuPUAekKR2ra1hK
        subject_person_id: p_1tCSH4qvU8Gxs2zqiHmkFr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎汾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NToaArsPu44ADuD1QCnrmc
          claim_id: c_Mey6Z2WRuPUAekKR2ra1hK
          source_id: s_HDt8grmr2fXh1fuMQwwNNr
          stance: supports
          locator: CBDB:526843
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_HDt8grmr2fXh1fuMQwwNNr
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎汾（CBDB 526843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526843&o=json
            external_identifier: CBDB:526843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_S1pvR-jRKBJaKi7pSa9UH8
        subject_person_id: p_1tCSH4qvU8Gxs2zqiHmkFr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2y1eP1nsjw8ciu9GjNsB8J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QwgrkQafi3Bzf-H29JEAMM
          claim_id: c_S1pvR-jRKBJaKi7pSa9UH8
          source_id: s_HDt8grmr2fXh1fuMQwwNNr
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13031：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2y1eP1nsjw8ciu9GjNsB8J
        status: active
        display_name: 王恩綬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎汾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鼎汾，清人物。中国历代人物传记资料库（CBDB）以人物编号 526843 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鼎汾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2y1eP1nsjw8ciu9GjNsB8J | 王恩綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎汾（CBDB 526843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526843&o=json)
