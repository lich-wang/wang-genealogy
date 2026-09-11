---
schema: wang-person/v1
id: p_mbccq4YaC5MVQuUczU5mWC
status: active
merged_into: null
display_name: 王咨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C1j4Eu7W4q6ipZyHZg3EH1
        subject_person_id: p_mbccq4YaC5MVQuUczU5mWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iL3nJKS2H2pUHhsNQJQVi8
          claim_id: c_C1j4Eu7W4q6ipZyHZg3EH1
          source_id: s_s3TKgGMGK4evQ62eY6eXLu
          stance: supports
          locator: CBDB:537073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537073）
          source: &a1
            id: s_s3TKgGMGK4evQ62eY6eXLu
            source_type: api_record
            title: 中国历代人物传记资料库：王咨（CBDB 537073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537073&o=json
            external_identifier: CBDB:537073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J1sNrDC89kwopKnvbBi987
        subject_person_id: p_mbccq4YaC5MVQuUczU5mWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王咨，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 537073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S2vag7es2-Z-4m3QYxH5No
          claim_id: c_J1sNrDC89kwopKnvbBi987
          source_id: s_s3TKgGMGK4evQ62eY6eXLu
          stance: supports
          locator: CBDB:537073
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

# 王咨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王咨 | accepted |
| bio.summary | 王咨，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 537073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王咨（CBDB 537073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537073&o=json)
