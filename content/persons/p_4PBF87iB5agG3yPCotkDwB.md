---
schema: wang-person/v1
id: p_4PBF87iB5agG3yPCotkDwB
status: active
merged_into: null
display_name: 王矩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s73QpFfe9N1xt1U9jkrxuC
        subject_person_id: p_4PBF87iB5agG3yPCotkDwB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eJd3qLBiyT499iCsqrs4MY
          claim_id: c_s73QpFfe9N1xt1U9jkrxuC
          source_id: s_oqyuKd1f8YEikDUJov25ZF
          stance: supports
          locator: CBDB:687265
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687265）
          source: &a1
            id: s_oqyuKd1f8YEikDUJov25ZF
            source_type: api_record
            title: 中国历代人物传记资料库：王矩（CBDB 687265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687265&o=json
            external_identifier: CBDB:687265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1DeFeTfZTanodQzwuX8pz
        subject_person_id: p_4PBF87iB5agG3yPCotkDwB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王矩，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 687265）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4gfAqOMJeqIYBb-IbsaJNr
          claim_id: c_N1DeFeTfZTanodQzwuX8pz
          source_id: s_oqyuKd1f8YEikDUJov25ZF
          stance: supports
          locator: CBDB:687265
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

# 王矩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王矩 | accepted |
| bio.summary | 王矩，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 687265） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王矩（CBDB 687265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687265&o=json)
