---
schema: wang-person/v1
id: p_SBo85j8bAhdj2fMhZLRVkN
status: active
merged_into: null
display_name: 王宗㐨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q3JK7Fioe4Uj1uAE89WidG
        subject_person_id: p_SBo85j8bAhdj2fMhZLRVkN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗㐨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CKGM1eVGdf3gg6v9UuS8by
          claim_id: c_Q3JK7Fioe4Uj1uAE89WidG
          source_id: s_Dn2kdbxgJJrkKUJET97s2v
          stance: supports
          locator: CBDB:573284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573284）
          source: &a1
            id: s_Dn2kdbxgJJrkKUJET97s2v
            source_type: api_record
            title: 中国历代人物传记资料库：王宗㐨（CBDB 573284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573284&o=json
            external_identifier: CBDB:573284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M9joAx1sE27w8izqUb2SDX
        subject_person_id: p_SBo85j8bAhdj2fMhZLRVkN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRQVjHursNAfgHwVAM2Hd5
          claim_id: c_M9joAx1sE27w8izqUb2SDX
          source_id: s_Dn2kdbxgJJrkKUJET97s2v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6kfNy9EByxzWpO76T7rsgS
        subject_person_id: p_SBo85j8bAhdj2fMhZLRVkN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MGSPMrtZa1rde7xNPyyNZv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEyKHZHo60wRAs2sJ9KaEP
          claim_id: c_6kfNy9EByxzWpO76T7rsgS
          source_id: s_86NPrr2TtC_esgVr1ibXAk
          stance: supports
          locator: 芒洛冢墓遺文四編，游安民墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_86NPrr2TtC_esgVr1ibXAk
            source_type: api_record
            title: 中国历代人物传记资料库：游氏(游安民四女)（CBDB 573283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573283&o=json
            external_identifier: CBDB:573283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MGSPMrtZa1rde7xNPyyNZv
        status: active
        display_name: 游氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宗㐨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗㐨 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_MGSPMrtZa1rde7xNPyyNZv | 游氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗㐨（CBDB 573284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573284&o=json)
- [中国历代人物传记资料库：游氏(游安民四女)（CBDB 573283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573283&o=json)
