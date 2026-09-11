---
schema: wang-person/v1
id: p_hQLEynziTD7U2V4km8Pxrq
status: active
merged_into: null
display_name: 王道舒
cbdb_id: 526679
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6WGdA1bW9YnEpB4r5EQGnd
        subject_person_id: p_hQLEynziTD7U2V4km8Pxrq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道舒，清人物。中国历代人物传记资料库（CBDB）以人物编号 526679 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_I97vVdKzdZo0dRYG1XsEN9
          claim_id: c_6WGdA1bW9YnEpB4r5EQGnd
          source_id: s_LLyeh82LFnPHje5SFVEhfN
          stance: supports
          locator: CBDB:526679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_LLyeh82LFnPHje5SFVEhfN
            source_type: api_record
            title: 中国历代人物传记资料库：王道舒（CBDB 526679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526679&o=json
            external_identifier: CBDB:526679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V5c1JVCNVHTA145xJSqiLK
        subject_person_id: p_hQLEynziTD7U2V4km8Pxrq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ms6ENvxyA2uypjGzFDKJv9
          claim_id: c_V5c1JVCNVHTA145xJSqiLK
          source_id: s_LLyeh82LFnPHje5SFVEhfN
          stance: supports
          locator: CBDB:526679
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_LLyeh82LFnPHje5SFVEhfN
            source_type: api_record
            title: 中国历代人物传记资料库：王道舒（CBDB 526679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526679&o=json
            external_identifier: CBDB:526679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZlQ7OUqIY1Bt-fwsmxN_8u
        subject_person_id: p_hQLEynziTD7U2V4km8Pxrq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jbt2hL0RD_c_L12C94z8cB
          claim_id: c_ZlQ7OUqIY1Bt-fwsmxN_8u
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12764：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_416y2w9RZNHCTvtcwgNL6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王天鑑（CBDB 69068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69068&o=json
            external_identifier: CBDB:69068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dXAPbcUx5YQ1aQB8uq7mPd
        status: active
        display_name: 王天鑑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道舒，清人物。中国历代人物传记资料库（CBDB）以人物编号 526679 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王道舒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dXAPbcUx5YQ1aQB8uq7mPd | 王天鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道舒（CBDB 526679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526679&o=json)
- [中国历代人物传记资料库：王天鑑（CBDB 69068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69068&o=json)
