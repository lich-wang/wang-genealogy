---
schema: wang-person/v1
id: p_hW36uz67xrtkAtWh3HFvYT
status: active
merged_into: null
display_name: 王道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sEajQKc2y8V62iK9ePaAk5
        subject_person_id: p_hW36uz67xrtkAtWh3HFvYT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F16PnhRuzpgLzr45urrZUE
          claim_id: c_sEajQKc2y8V62iK9ePaAk5
          source_id: s_Q9ZbkQUBopUyybhDsMmoa1
          stance: supports
          locator: CBDB:292179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292179）
          source: &a1
            id: s_Q9ZbkQUBopUyybhDsMmoa1
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 292179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json
            external_identifier: CBDB:292179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zQADiC1UpsCmHF3NjaaSDP
        subject_person_id: p_hW36uz67xrtkAtWh3HFvYT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292179）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uyEUBIocxSX8OyVsXCNqet
          claim_id: c_zQADiC1UpsCmHF3NjaaSDP
          source_id: s_Q9ZbkQUBopUyybhDsMmoa1
          stance: supports
          locator: CBDB:292179
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pchoF5jkDBni5rIxObmfSn
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hW36uz67xrtkAtWh3HFvYT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7NLhrEsNDQV9Vx94lUml1y
          claim_id: c_pchoF5jkDBni5rIxObmfSn
          source_id: s_BY8LJD9QysnTr3UsdoEevm
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王道 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王道 之父／母。
          source:
            id: s_BY8LJD9QysnTr3UsdoEevm
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 292179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json
            external_identifier: CBDB:292179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0tfk2C8wOB78tbDZKkVpyx
        subject_person_id: p_hW36uz67xrtkAtWh3HFvYT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXrIOTSYh-un0n8W_wpyGR
          claim_id: c_0tfk2C8wOB78tbDZKkVpyx
          source_id: s_BY8LJD9QysnTr3UsdoEevm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BY8LJD9QysnTr3UsdoEevm
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 292179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json
            external_identifier: CBDB:292179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| other | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 292179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json)
