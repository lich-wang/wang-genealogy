---
schema: wang-person/v1
id: p_gQ7WDuR6RyWghiT4bukCj8
status: active
merged_into: null
display_name: 王懋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EUvKshFsRSFziLWW7NNvt9
        subject_person_id: p_gQ7WDuR6RyWghiT4bukCj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EpDvhbzvMWFutV4Mwr2gNm
          claim_id: c_EUvKshFsRSFziLWW7NNvt9
          source_id: s_wsZ3m2ANNVMKCsonGsGyVu
          stance: supports
          locator: CBDB:33007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33007）
          source: &a1
            id: s_wsZ3m2ANNVMKCsonGsGyVu
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 33007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33007&o=json
            external_identifier: CBDB:33007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WhXFJoSNUHZP2uEi6usqqW
        subject_person_id: p_gQ7WDuR6RyWghiT4bukCj8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，東漢人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 33007）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v_6wrF7LI_MBEqDdHGkMu7
          claim_id: c_WhXFJoSNUHZP2uEi6usqqW
          source_id: s_wsZ3m2ANNVMKCsonGsGyVu
          stance: supports
          locator: CBDB:33007
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A_E3uD7ZoFC7W9rruQXIjb
        subject_person_id: p_Cf4DeqbmDMMNTQmvW5HBk9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gQ7WDuR6RyWghiT4bukCj8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_myjELvZ0AELU7RA346gFsg
          claim_id: c_A_E3uD7ZoFC7W9rruQXIjb
          source_id: s_qAMsAkpmZUWuLhcck9QxkM
          stance: supports
          locator: CBDB 亲属：父（KinPerson 33006）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_qAMsAkpmZUWuLhcck9QxkM
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 33007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33007&o=json
            external_identifier: CBDB:33007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Cf4DeqbmDMMNTQmvW5HBk9
        status: active
        display_name: 王實
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，東漢人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 33007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Cf4DeqbmDMMNTQmvW5HBk9 | 王實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 33007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33007&o=json)
