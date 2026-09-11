---
schema: wang-person/v1
id: p_5UK4yum3qfMC7B8J5R5943
status: active
merged_into: null
display_name: 王玉貞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MGkeMoYn8UL2sVUNxBMTag
        subject_person_id: p_5UK4yum3qfMC7B8J5R5943
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wH7XX3PMBb3KLFzRFDUVM9
          claim_id: c_MGkeMoYn8UL2sVUNxBMTag
          source_id: s_5pyojZaCcpmRceGp7fVxLi
          stance: supports
          locator: CBDB:691796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691796）
          source: &a1
            id: s_5pyojZaCcpmRceGp7fVxLi
            source_type: api_record
            title: 中国历代人物传记资料库：王玉貞（CBDB 691796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691796&o=json
            external_identifier: CBDB:691796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.494Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uFDjQM2sDhLop3TBYVayK2
        subject_person_id: p_5UK4yum3qfMC7B8J5R5943
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉貞，明人物。籍贯海鹽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 691796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cGWcYuOTNEa8-l8ZZdaW1A
          claim_id: c_uFDjQM2sDhLop3TBYVayK2
          source_id: s_5pyojZaCcpmRceGp7fVxLi
          stance: supports
          locator: CBDB:691796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v6HV2tRb4PJSpEKSeIXIBy
        subject_person_id: p_MVaKWxp5JYQvy3phNm9AwT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5UK4yum3qfMC7B8J5R5943
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wVAEGKXCPBoE61bAqI6vyb
          claim_id: c_v6HV2tRb4PJSpEKSeIXIBy
          source_id: s_5pyojZaCcpmRceGp7fVxLi
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294151：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MVaKWxp5JYQvy3phNm9AwT
        status: active
        display_name: 王銓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RX0VZhz5DUTbMKdhUWK2Y6
        subject_person_id: p_5UK4yum3qfMC7B8J5R5943
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8FA8zcXJnzjSjXxh6hwsCf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1H36OP9aEXyvK-_aiKIxrO
          claim_id: c_RX0VZhz5DUTbMKdhUWK2Y6
          source_id: s_e7WvRYXZ0tcvXpWeXZS-tK
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294151：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e7WvRYXZ0tcvXpWeXZS-tK
            source_type: api_record
            title: 中国历代人物传记资料库：沈國相（CBDB 691795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691795&o=json
            external_identifier: CBDB:691795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8FA8zcXJnzjSjXxh6hwsCf
        status: active
        display_name: 沈國相
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王玉貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉貞 | accepted |
| bio.summary | 王玉貞，明人物。籍贯海鹽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 691796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MVaKWxp5JYQvy3phNm9AwT | 王銓 | accepted |
| spouses | p_8FA8zcXJnzjSjXxh6hwsCf | 沈國相 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈國相（CBDB 691795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691795&o=json)
- [中国历代人物传记资料库：王玉貞（CBDB 691796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691796&o=json)
