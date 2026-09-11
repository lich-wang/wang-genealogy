---
schema: wang-person/v1
id: p_A98oCA9YbqExPnE194fig8
status: active
merged_into: null
display_name: 王頊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h7cZ7YEJ5MN1h6PEA2iybM
        subject_person_id: p_A98oCA9YbqExPnE194fig8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fYWUF6x6nVcHdogUepJ2Jk
          claim_id: c_h7cZ7YEJ5MN1h6PEA2iybM
          source_id: s_VdDbFFQ7CgkG8RSkewnT9v
          stance: supports
          locator: CBDB:159753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159753）
          source: &a1
            id: s_VdDbFFQ7CgkG8RSkewnT9v
            source_type: api_record
            title: 中国历代人物传记资料库：王頊（CBDB 159753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159753&o=json
            external_identifier: CBDB:159753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f2qi875p8DwJTt8qEiiMB1
        subject_person_id: p_A98oCA9YbqExPnE194fig8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XF6N2Tr3iRZpQP9J1oc2ur
          claim_id: c_f2qi875p8DwJTt8qEiiMB1
          source_id: s_VdDbFFQ7CgkG8RSkewnT9v
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
        id: c_X5oHeHUeUEjFyaurB-I40X
        subject_person_id: p_A98oCA9YbqExPnE194fig8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VFmKN22vwB7nSA1Z3U3aKE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BJUqXS3T9s1D6v_Ewbr8o1
          claim_id: c_X5oHeHUeUEjFyaurB-I40X
          source_id: s__cGgfCpshBfcGj0VMY7iDw
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 122：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__cGgfCpshBfcGj0VMY7iDw
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(陳翛女)（CBDB 141716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141716&o=json
            external_identifier: CBDB:141716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VFmKN22vwB7nSA1Z3U3aKE
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王頊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頊 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_VFmKN22vwB7nSA1Z3U3aKE | 陳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(陳翛女)（CBDB 141716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141716&o=json)
- [中国历代人物传记资料库：王頊（CBDB 159753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159753&o=json)
