---
schema: wang-person/v1
id: p_R3KjiJ6AtFp3cp2mBnFBEY
status: active
merged_into: null
display_name: 王庭詩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MW1yVcUFZ3i39oVzBQMEv
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭詩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4vX5y26nocv5YxxPRkvxgZ
          claim_id: c_2MW1yVcUFZ3i39oVzBQMEv
          source_id: s_MGYxG86C7Zt1SGzDcLgkDc
          stance: supports
          locator: CBDB:205441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205441）
          source: &a1
            id: s_MGYxG86C7Zt1SGzDcLgkDc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 205441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205441&o=json
            external_identifier: CBDB:205441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aBAufwBBnndhHk9PfieXJw
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkR8fy7EsDHHa8sUkeHTLS
          claim_id: c_aBAufwBBnndhHk9PfieXJw
          source_id: s_MGYxG86C7Zt1SGzDcLgkDc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_doECGXJQXjHdKxUfD4sZvE
        subject_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yD1bopB2qJBMC21KpLsJZ3
          claim_id: c_doECGXJQXjHdKxUfD4sZvE
          source_id: s_MGYxG86C7Zt1SGzDcLgkDc
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
  spouses: []
  ancestors:
    - claim:
        id: c_zwKuGkxSbdNAkwSWnTpoLv
        subject_person_id: p_Bvc7iqxRbBLKig5CA9rzQr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_goUqjfdR8NMAvwN1x4rIFu
          claim_id: c_zwKuGkxSbdNAkwSWnTpoLv
          source_id: s_uer8yMZHJHTsbJ895LeYfa
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uer8yMZHJHTsbJ895LeYfa
            source_type: api_record
            title: 中国历代人物传记资料库：王善述（CBDB 333201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333201&o=json
            external_identifier: CBDB:333201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bvc7iqxRbBLKig5CA9rzQr
        status: active
        display_name: 王善述
        merged_into_person_id: null
    - claim:
        id: c_L59CFuLEEvzlqQRaxC3oAH
        subject_person_id: p_L5GNQWRCoqrZnvRnDJLKba
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_R3KjiJ6AtFp3cp2mBnFBEY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8kASVEkVlsevFACecXuSHl
          claim_id: c_L59CFuLEEvzlqQRaxC3oAH
          source_id: s_EjSM1wYYaYM5ZnEq99wUpB
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EjSM1wYYaYM5ZnEq99wUpB
            source_type: api_record
            title: 中国历代人物传记资料库：王朝臣（CBDB 333200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333200&o=json
            external_identifier: CBDB:333200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_L5GNQWRCoqrZnvRnDJLKba
        status: active
        display_name: 王朝臣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王庭詩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭詩 | accepted |
| birth.date | 1546年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Bvc7iqxRbBLKig5CA9rzQr | 王善述 | accepted |
| ancestors | p_L5GNQWRCoqrZnvRnDJLKba | 王朝臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝臣（CBDB 333200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333200&o=json)
- [中国历代人物传记资料库：王善述（CBDB 333201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333201&o=json)
- [中国历代人物传记资料库：王庭詩（CBDB 205441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205441&o=json)
