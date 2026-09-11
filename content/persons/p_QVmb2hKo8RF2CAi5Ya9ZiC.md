---
schema: wang-person/v1
id: p_QVmb2hKo8RF2CAi5Ya9ZiC
status: active
merged_into: null
display_name: 王擢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FyenMMLDr1uZ6vNovDarcJ
        subject_person_id: p_QVmb2hKo8RF2CAi5Ya9ZiC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KXMyqPATG4xrdYKCje55zx
          claim_id: c_FyenMMLDr1uZ6vNovDarcJ
          source_id: s_5fZDNaUGQuxYx7F8n7N4dw
          stance: supports
          locator: CBDB:12616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12616）
          source: &a1
            id: s_5fZDNaUGQuxYx7F8n7N4dw
            source_type: api_record
            title: 中国历代人物传记资料库：王擢（CBDB 12616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12616&o=json
            external_identifier: CBDB:12616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FQ7QAVDRJAwSt7t7QTPwZ4
        subject_person_id: p_QVmb2hKo8RF2CAi5Ya9ZiC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擢，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 12616）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z4sKhejBeuhtqKhIRlP5bG
          claim_id: c_FQ7QAVDRJAwSt7t7QTPwZ4
          source_id: s_5fZDNaUGQuxYx7F8n7N4dw
          stance: supports
          locator: CBDB:12616
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

# 王擢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王擢 | accepted |
| bio.summary | 王擢，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 12616） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王擢（CBDB 12616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12616&o=json)
