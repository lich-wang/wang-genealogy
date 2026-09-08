---
schema: wang-person/v1
id: p_Xfkv2uu5fBfnJ5YyvgE4da
status: active
merged_into: null
display_name: 王厚
cbdb_id: 15746
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bVXsbB3DTjPnLLoFfcZaAP
        subject_person_id: p_Xfkv2uu5fBfnJ5YyvgE4da
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jpiN5mZ134SxQJNi57UkBd
          claim_id: c_bVXsbB3DTjPnLLoFfcZaAP
          source_id: s_N1f3ehi66pennWQUvGkhCa
          stance: supports
          locator: Q45381147
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_N1f3ehi66pennWQUvGkhCa
            source_type: api_record
            title: 维基数据：王厚（Q45381147）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381147
            external_identifier: Q45381147
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_KyEeTDFC1FsGqFADRrQByx
          claim_id: c_bVXsbB3DTjPnLLoFfcZaAP
          source_id: s_ZQUTuGRKbJKuB3GvfDD6xZ
          stance: supports
          locator: CBDB:15746
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_ZQUTuGRKbJKuB3GvfDD6xZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王厚（15746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15746&o=json
            external_identifier: CBDB:15746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VEdji85GKA9kcFNQpdSsmQ
        subject_person_id: p_Xfkv2uu5fBfnJ5YyvgE4da
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: person, CBDB = 15746
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pCMHru84iCXUwF8NXaUk3
          claim_id: c_VEdji85GKA9kcFNQpdSsmQ
          source_id: s_N1f3ehi66pennWQUvGkhCa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DpWq7PNoLF93cWrmuuKmXP
        subject_person_id: p_Xfkv2uu5fBfnJ5YyvgE4da
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_diPVGy9BzMjoKiUc6icH9N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sL8ZPWB4xM5oL86pZAgxPn
          claim_id: c_DpWq7PNoLF93cWrmuuKmXP
          source_id: s_N1f3ehi66pennWQUvGkhCa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ujm1Qui2vAVr4bF2a2mH8a
          claim_id: c_DpWq7PNoLF93cWrmuuKmXP
          source_id: s_gUKLxhVWyMb8FFrDMHt15y
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gUKLxhVWyMb8FFrDMHt15y
            source_type: api_record
            title: 维基数据：王化（Q45381148）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381148
            external_identifier: Q45381148
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:14.100Z
            metadata_json: null
      object_person:
        id: p_diPVGy9BzMjoKiUc6icH9N
        status: active
        display_name: 王化
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚 | accepted |
| bio.summary | person, CBDB = 15746 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_diPVGy9BzMjoKiUc6icH9N | 王化 | accepted |

## 外部来源

- [维基数据：王厚（Q45381147）](https://www.wikidata.org/wiki/Q45381147)
- [维基数据：王化（Q45381148）](https://www.wikidata.org/wiki/Q45381148)
- [CBDB 中国历代人物传记资料库：王厚（15746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15746&o=json)
