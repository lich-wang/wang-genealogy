---
schema: wang-person/v1
id: p_eF5wLrrDKoMFPPNBMhLhoc
status: active
merged_into: null
display_name: 王劭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6QCjYdbtqjBDsTa4PZMNbj
        subject_person_id: p_eF5wLrrDKoMFPPNBMhLhoc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nPJaJAT6AFuSceXbYJrbXw
          claim_id: c_6QCjYdbtqjBDsTa4PZMNbj
          source_id: s_8R4xwS5CTJtGQ8DKAycMJ2
          stance: supports
          locator: CBDB:537168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537168）
          source: &a1
            id: s_8R4xwS5CTJtGQ8DKAycMJ2
            source_type: api_record
            title: 中国历代人物传记资料库：王劭（CBDB 537168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537168&o=json
            external_identifier: CBDB:537168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q4baTM5RVZkA7d42kuAqbU
        subject_person_id: p_eF5wLrrDKoMFPPNBMhLhoc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭，宋人物。籍贯莆田，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 537168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zO4OmVvB4rXiVClQ1hcgKe
          claim_id: c_q4baTM5RVZkA7d42kuAqbU
          source_id: s_8R4xwS5CTJtGQ8DKAycMJ2
          stance: supports
          locator: CBDB:537168
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

# 王劭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王劭 | accepted |
| bio.summary | 王劭，宋人物。籍贯莆田，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 537168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王劭（CBDB 537168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537168&o=json)
