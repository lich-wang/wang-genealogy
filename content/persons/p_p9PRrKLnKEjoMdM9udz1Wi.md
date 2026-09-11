---
schema: wang-person/v1
id: p_p9PRrKLnKEjoMdM9udz1Wi
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8TbKKb9PpGVDt5geESPEPY
        subject_person_id: p_p9PRrKLnKEjoMdM9udz1Wi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rq72hLGHL9kgZcsDpPPLuo
          claim_id: c_8TbKKb9PpGVDt5geESPEPY
          source_id: s_ssR19gowy1ojEUTAs74XiF
          stance: supports
          locator: CBDB:39175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39175）
          source: &a1
            id: s_ssR19gowy1ojEUTAs74XiF
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 39175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39175&o=json
            external_identifier: CBDB:39175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UEZKW93sRk24C8avgPHfo3
        subject_person_id: p_p9PRrKLnKEjoMdM9udz1Wi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王輔，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 39175）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b896277sc1URAK5f7w896i
          claim_id: c_UEZKW93sRk24C8avgPHfo3
          source_id: s_ssR19gowy1ojEUTAs74XiF
          stance: supports
          locator: CBDB:39175
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | 王輔，宋人物。入仕科舉學校: 恩賜出身、特賜出身等。（中国历代人物传记资料库 CBDB 39175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 39175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39175&o=json)
