---
schema: wang-person/v1
id: p_Avmx7J2ufnPsVjzzweTV6f
status: active
merged_into: null
display_name: 王信民
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4YEQVePKaZSJ614iSAcxEm
        subject_person_id: p_Avmx7J2ufnPsVjzzweTV6f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JMjkarzmJVMsbKPfWp61BB
          claim_id: c_4YEQVePKaZSJ614iSAcxEm
          source_id: s_5Y7nAfhnmBCrN84V1fYK56
          stance: supports
          locator: CBDB:697032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697032）
          source: &a1
            id: s_5Y7nAfhnmBCrN84V1fYK56
            source_type: api_record
            title: 中国历代人物传记资料库：王信民（CBDB 697032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697032&o=json
            external_identifier: CBDB:697032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mfDQhdiKXjBHCuxUAusQej
        subject_person_id: p_Avmx7J2ufnPsVjzzweTV6f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信民，宋人物。曾任朝奉郎、上輕車都尉、駕部司員外郎。（中国历代人物传记资料库 CBDB 697032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i-7tbpF_yRxvOFHyGQOSKH
          claim_id: c_mfDQhdiKXjBHCuxUAusQej
          source_id: s_5Y7nAfhnmBCrN84V1fYK56
          stance: supports
          locator: CBDB:697032
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1aW-hoFMLgqns5NZvRo6ic
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Avmx7J2ufnPsVjzzweTV6f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxLPnqlQHQ2ubU7C-ugsFu
          claim_id: c_1aW-hoFMLgqns5NZvRo6ic
          source_id: s_5Y7nAfhnmBCrN84V1fYK56
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信民 | accepted |
| bio.summary | 王信民，宋人物。曾任朝奉郎、上輕車都尉、駕部司員外郎。（中国历代人物传记资料库 CBDB 697032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信民（CBDB 697032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697032&o=json)
