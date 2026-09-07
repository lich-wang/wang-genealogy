---
schema: wang-person/v1
id: p_SWfQfCDCKhLf9P4kgMuHQS
status: active
merged_into: null
display_name: 王立程
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jnMYzzN0Srj63cV7FlR1QR
        subject_person_id: p_SWfQfCDCKhLf9P4kgMuHQS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王立程，明人物。CBDB 记录其籍贯记录为臨海，入仕记录为科舉: 鄉貢舉人。中国历代人物传记资料库（CBDB）以人物编号 702263 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oZN3iE7kJ89XUp7wwfejHW
          claim_id: c_jnMYzzN0Srj63cV7FlR1QR
          source_id: s_AEDAFCCjaEUtAXSw6d3mhf
          stance: supports
          locator: CBDB:702263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AEDAFCCjaEUtAXSw6d3mhf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王立程（702263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702263&o=json
            external_identifier: CBDB:702263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:25.264Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ekdQ33eGdCU3zxJdNY6xK
        subject_person_id: p_SWfQfCDCKhLf9P4kgMuHQS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hFwk51MUnN8jPhiYivfRF8
          claim_id: c_1ekdQ33eGdCU3zxJdNY6xK
          source_id: s_AEDAFCCjaEUtAXSw6d3mhf
          stance: supports
          locator: CBDB:702263
          quotation: null
          interpretation_note: null
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

# 王立程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王立程，明人物。CBDB 记录其籍贯记录为臨海，入仕记录为科舉: 鄉貢舉人。中国历代人物传记资料库（CBDB）以人物编号 702263 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王立程 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [CBDB 中国历代人物传记资料库：王立程（702263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702263&o=json)
