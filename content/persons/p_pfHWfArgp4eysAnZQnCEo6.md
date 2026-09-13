---
schema: wang-person/v1
id: p_pfHWfArgp4eysAnZQnCEo6
status: active
merged_into: null
display_name: 王承谷
cbdb_id: 71826
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yPa5EmLQn4MCrz3rbsfk9v
        subject_person_id: p_pfHWfArgp4eysAnZQnCEo6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承谷（1879年—1923年），史料所见人物。本项目依据《中国历代人物传记资料库：王承谷（CBDB 71826）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4d1YISSxN_wrQVZhtdUqU0
          claim_id: c_yPa5EmLQn4MCrz3rbsfk9v
          source_id: s_sThPiBQrexmgjABv6kXPtJ
          stance: supports
          locator: CBDB:71826
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sThPiBQrexmgjABv6kXPtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王承谷（CBDB 71826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71826&o=json
            external_identifier: CBDB:71826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VaTKcXcx2jbFsD7bKuaCDt
        subject_person_id: p_pfHWfArgp4eysAnZQnCEo6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1879年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1879-01-01
            latest: 1879-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7UWgdtEbmPhSRASV9iQvF1
          claim_id: c_VaTKcXcx2jbFsD7bKuaCDt
          source_id: s_sThPiBQrexmgjABv6kXPtJ
          stance: supports
          locator: CBDB:71826
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1923
          source:
            id: s_sThPiBQrexmgjABv6kXPtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王承谷（CBDB 71826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71826&o=json
            external_identifier: CBDB:71826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iHMxZW9gZqQNwtbT4D49iD
        subject_person_id: p_pfHWfArgp4eysAnZQnCEo6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1923年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1923-01-01
            latest: 1923-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DY2v5EDkzwDdrakzMZdMYd
          claim_id: c_iHMxZW9gZqQNwtbT4D49iD
          source_id: s_sThPiBQrexmgjABv6kXPtJ
          stance: supports
          locator: CBDB:71826
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1923
          source:
            id: s_sThPiBQrexmgjABv6kXPtJ
            source_type: api_record
            title: 中国历代人物传记资料库：王承谷（CBDB 71826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71826&o=json
            external_identifier: CBDB:71826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:36.789Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z6ETZzpSpGoNNNZMfRWk8b
        subject_person_id: p_pfHWfArgp4eysAnZQnCEo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承谷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KdcrV2DqC5RgTVxemHjamC
          claim_id: c_z6ETZzpSpGoNNNZMfRWk8b
          source_id: s_sThPiBQrexmgjABv6kXPtJ
          stance: supports
          locator: CBDB:71826
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（201-300）｜历史性依据：CBDB 卒年 = 1923
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

# 王承谷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承谷（1879年—1923年），史料所见人物。本项目依据《中国历代人物传记资料库：王承谷（CBDB 71826）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1879年 | accepted |
| death.date | 1923年 | accepted |
| name.primary | 王承谷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承谷（CBDB 71826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71826&o=json)
