---
schema: wang-person/v1
id: p_qzRDrqjW6BFLYhMP3xVCXP
status: active
merged_into: null
display_name: 王尙志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ADYTN1eGFs1AHyXpsUXvy
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尙志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1wj3fXcKLs8Zxz7H8mWkB
          claim_id: c_3ADYTN1eGFs1AHyXpsUXvy
          source_id: s_f8uU5G76fB3RTPBmQBH199
          stance: supports
          locator: CBDB:694288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694288）
          source: &a1
            id: s_f8uU5G76fB3RTPBmQBH199
            source_type: api_record
            title: 中国历代人物传记资料库：王尙志（CBDB 694288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694288&o=json
            external_identifier: CBDB:694288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDS6Uas45eS2rZBXL17uv3
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H4M1PCsMNK9GrL1jDFgKHQ
          claim_id: c_GDS6Uas45eS2rZBXL17uv3
          source_id: s_f8uU5G76fB3RTPBmQBH199
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HXJ-r1yFL27xfsSdPmxCkM
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fDhimD1m3wM6F4kC7gocUW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9dm0qhcTPmcByvamp3QlP
          claim_id: c_HXJ-r1yFL27xfsSdPmxCkM
          source_id: s_S7X7GeP8bWcnwLmVZxa1s6
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294038：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S7X7GeP8bWcnwLmVZxa1s6
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 694296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694296&o=json
            external_identifier: CBDB:694296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fDhimD1m3wM6F4kC7gocUW
        status: active
        display_name: 王溥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1k1q6sA1XOcK4rPZ5wbCME
        subject_person_id: p_qzRDrqjW6BFLYhMP3xVCXP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hB8z42Z7wm2scy2oshAB2E
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KktJS5s7uvlfq4sx2xSEmc
          claim_id: c_1k1q6sA1XOcK4rPZ5wbCME
          source_id: s_Pnhxmm7fb7RuEkN3HPyK65
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294038：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pnhxmm7fb7RuEkN3HPyK65
            source_type: api_record
            title: 中国历代人物传记资料库：王之枚（CBDB 694297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694297&o=json
            external_identifier: CBDB:694297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hB8z42Z7wm2scy2oshAB2E
        status: active
        display_name: 王之枚
        merged_into_person_id: null
  other: []
---

# 王尙志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尙志 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fDhimD1m3wM6F4kC7gocUW | 王溥 | accepted |
| descendants | p_hB8z42Z7wm2scy2oshAB2E | 王之枚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 694296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694296&o=json)
- [中国历代人物传记资料库：王尙志（CBDB 694288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694288&o=json)
- [中国历代人物传记资料库：王之枚（CBDB 694297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694297&o=json)
