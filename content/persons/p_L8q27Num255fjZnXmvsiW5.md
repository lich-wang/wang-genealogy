---
schema: wang-person/v1
id: p_L8q27Num255fjZnXmvsiW5
status: active
merged_into: null
display_name: 王懷光
cbdb_id: 151425
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PL56DV44iF3vRfwhmiM2XL
        subject_person_id: p_L8q27Num255fjZnXmvsiW5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷光，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 151425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mEoSONpNxkohCiXp_wp4QK
          claim_id: c_PL56DV44iF3vRfwhmiM2XL
          source_id: s_o4xPdKQ9UnQHhot62qdr14
          stance: supports
          locator: CBDB:151425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_o4xPdKQ9UnQHhot62qdr14
            source_type: api_record
            title: 中国历代人物传记资料库：王懷光（CBDB 151425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151425&o=json
            external_identifier: CBDB:151425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Aj323AaGD8u5mHpeQx44tN
        subject_person_id: p_L8q27Num255fjZnXmvsiW5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yASfvQS3B6wiDStG7i41R6
          claim_id: c_Aj323AaGD8u5mHpeQx44tN
          source_id: s_o4xPdKQ9UnQHhot62qdr14
          stance: supports
          locator: CBDB:151425
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AlJ1iMDyIZVCa06PqdQxPL
        subject_person_id: p_UoDuFWRFgfGtUzy5hZREHx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L8q27Num255fjZnXmvsiW5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9Ef_eZBnXdVSAwmtAbcjU
          claim_id: c_AlJ1iMDyIZVCa06PqdQxPL
          source_id: s_o4xPdKQ9UnQHhot62qdr14
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 90：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o4xPdKQ9UnQHhot62qdr14
            source_type: api_record
            title: 中国历代人物传记资料库：王懷光（CBDB 151425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151425&o=json
            external_identifier: CBDB:151425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_UoDuFWRFgfGtUzy5hZREHx
        status: active
        display_name: 王元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懷光，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 151425） | accepted |
| name.primary | 王懷光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UoDuFWRFgfGtUzy5hZREHx | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷光（CBDB 151425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151425&o=json)
