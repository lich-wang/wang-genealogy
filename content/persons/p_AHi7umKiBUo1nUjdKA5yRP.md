---
schema: wang-person/v1
id: p_AHi7umKiBUo1nUjdKA5yRP
status: active
merged_into: null
display_name: 王用和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7tuxs2wnehyoJzuAAxMPiq
        subject_person_id: p_AHi7umKiBUo1nUjdKA5yRP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZCbXPzMU3e3mx8E7iyHLi
          claim_id: c_7tuxs2wnehyoJzuAAxMPiq
          source_id: s_g18wNWhsjfi7DxL8tZgViK
          stance: supports
          locator: CBDB:696168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696168）
          source: &a1
            id: s_g18wNWhsjfi7DxL8tZgViK
            source_type: api_record
            title: 中国历代人物传记资料库：王用和（CBDB 696168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696168&o=json
            external_identifier: CBDB:696168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XYQtNYKRGZuYejqPctPaFE
        subject_person_id: p_AHi7umKiBUo1nUjdKA5yRP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用和，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wR-j2Z1Jr_eGonoXQGjxRo
          claim_id: c_XYQtNYKRGZuYejqPctPaFE
          source_id: s_g18wNWhsjfi7DxL8tZgViK
          stance: supports
          locator: CBDB:696168
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HM96vxIgOpU6vhFoKWNuaf
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AHi7umKiBUo1nUjdKA5yRP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ke6tHi3ChLMciZOOk8Zlwk
          claim_id: c_HM96vxIgOpU6vhFoKWNuaf
          source_id: s_g18wNWhsjfi7DxL8tZgViK
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MRcNDk25WD9q2qKW2Sg6T2
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用和 | accepted |
| bio.summary | 王用和，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MRcNDk25WD9q2qKW2Sg6T2 | 王誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用和（CBDB 696168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696168&o=json)
