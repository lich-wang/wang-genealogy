---
schema: wang-person/v1
id: p_qZ9RK2uiApwTveXanb81yi
status: active
merged_into: null
display_name: 王延佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFiSQ6uAyHN28WUNgG13hB
        subject_person_id: p_qZ9RK2uiApwTveXanb81yi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SWUnFEjPVuMF7RuK7Fjcna
          claim_id: c_jFiSQ6uAyHN28WUNgG13hB
          source_id: s_bRdn9W7MsEMpf5NQ4cVnSh
          stance: supports
          locator: CBDB:555525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555525）
          source: &a1
            id: s_bRdn9W7MsEMpf5NQ4cVnSh
            source_type: api_record
            title: 中国历代人物传记资料库：王延佑（CBDB 555525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555525&o=json
            external_identifier: CBDB:555525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ojZZCzrmejniN5GbFGgV2G
        subject_person_id: p_qZ9RK2uiApwTveXanb81yi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王延佑，明人物。籍贯信陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 555525）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0p9LcWWtLtgsEnIcEarzMc
          claim_id: c_ojZZCzrmejniN5GbFGgV2G
          source_id: s_bRdn9W7MsEMpf5NQ4cVnSh
          stance: supports
          locator: CBDB:555525
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

# 王延佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延佑 | accepted |
| bio.summary | 王延佑，明人物。籍贯信陽，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 555525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延佑（CBDB 555525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555525&o=json)
