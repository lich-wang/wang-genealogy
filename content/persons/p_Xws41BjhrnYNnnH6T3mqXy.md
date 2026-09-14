---
schema: wang-person/v1
id: p_Xws41BjhrnYNnnH6T3mqXy
status: active
merged_into: null
display_name: 王一麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jphJo3k7Az1vqgPaoqwoKE
        subject_person_id: p_Xws41BjhrnYNnnH6T3mqXy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GcXXXT7TiopM3cdAyL2qQH
          claim_id: c_jphJo3k7Az1vqgPaoqwoKE
          source_id: s_S5VBPq4CfR21jfx5UPvDL4
          stance: supports
          locator: CBDB:230383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230383）
          source: &a1
            id: s_S5VBPq4CfR21jfx5UPvDL4
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 230383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230383&o=json
            external_identifier: CBDB:230383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sxk3SFqQt4epTrXhv61EzB
        subject_person_id: p_Xws41BjhrnYNnnH6T3mqXy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟，明人物。萬曆丙戌科進士進士，籍贯洋縣。（中国历代人物传记资料库 CBDB 230383）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kcvvKARBfSH4tsybC8znzl
          claim_id: c_sxk3SFqQt4epTrXhv61EzB
          source_id: s_S5VBPq4CfR21jfx5UPvDL4
          stance: supports
          locator: CBDB:230383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0nraA8GLC7q1q5hEv2qBIf
        subject_person_id: p_6Yn1HjpWop229REQ9NGBi2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xws41BjhrnYNnnH6T3mqXy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_clGep9czqm7EpafhQnVj8e
          claim_id: c_0nraA8GLC7q1q5hEv2qBIf
          source_id: s_3WHT-LB_xakUwVfQtlt7Tk
          stance: supports
          locator: CBDB：兄弟 王一魁（207258）之父／母 王承光
          quotation: null
          interpretation_note: 由兄弟关系推断：王一麟 与 王一魁 为同胞（CBDB 记「兄」），王一魁 之父／母即 王一麟 之父／母。
          source:
            id: s_3WHT-LB_xakUwVfQtlt7Tk
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 230383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230383&o=json
            external_identifier: CBDB:230383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Yn1HjpWop229REQ9NGBi2
        status: active
        display_name: 王承光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xZikRTACLk9PaVoiu_eSaf
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Xws41BjhrnYNnnH6T3mqXy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bn71-g1sZqafbwbLvFeP8W
          claim_id: c_xZikRTACLk9PaVoiu_eSaf
          source_id: s_3WHT-LB_xakUwVfQtlt7Tk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207258 王一魁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3WHT-LB_xakUwVfQtlt7Tk
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 230383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230383&o=json
            external_identifier: CBDB:230383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DVJuaQ4fqcXMz2HJX35bCQ
        status: active
        display_name: 王一魁
        merged_into_person_id: null
---

# 王一麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一麟 | accepted |
| bio.summary | 王一麟，明人物。萬曆丙戌科進士進士，籍贯洋縣。（中国历代人物传记资料库 CBDB 230383） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Yn1HjpWop229REQ9NGBi2 | 王承光 | accepted |
| other | p_DVJuaQ4fqcXMz2HJX35bCQ | 王一魁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一麟（CBDB 230383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230383&o=json)
