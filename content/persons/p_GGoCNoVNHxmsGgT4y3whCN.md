---
schema: wang-person/v1
id: p_GGoCNoVNHxmsGgT4y3whCN
status: active
merged_into: null
display_name: 王瓖
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Be8EruAkwBvxQoDewya62Z
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JjtpsKQNiw8F5pMvAwKRVB
          claim_id: c_Be8EruAkwBvxQoDewya62Z
          source_id: s_EL4fQCRvvTPQL9bSP48vVV
          stance: supports
          locator: CBDB:338696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338696）
          source: &a1
            id: s_EL4fQCRvvTPQL9bSP48vVV
            source_type: api_record
            title: 中国历代人物传记资料库：王瓖（CBDB 338696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338696&o=json
            external_identifier: CBDB:338696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vY3S6c9VvvdQVBDBjiW5JR
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1421年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m1erUPtikh8B6jftzgnjB1
          claim_id: c_vY3S6c9VvvdQVBDBjiW5JR
          source_id: s_EL4fQCRvvTPQL9bSP48vVV
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
        id: c_sKn7grDA8okuLPZUyo86cP
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓖（生于1421年），明人物。明清進士進士，籍贯襄城，入仕進士。（中国历代人物传记资料库 CBDB 338696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LNwoDtzUK_R2whAWDls5c5
          claim_id: c_sKn7grDA8okuLPZUyo86cP
          source_id: s_EL4fQCRvvTPQL9bSP48vVV
          stance: supports
          locator: CBDB:338696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BGAsRgmyAfltiReLmXiBRX
        subject_person_id: p_w9i3DxK5tYZ48zzRUjm6Xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iRP78Ds2L-ZLbpxPaGRaCP
          claim_id: c_BGAsRgmyAfltiReLmXiBRX
          source_id: s_mwnQ36a9CaWUzdMFyfHYqV
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mwnQ36a9CaWUzdMFyfHYqV
            source_type: api_record
            title: 中国历代人物传记资料库：王警道（CBDB 240078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240078&o=json
            external_identifier: CBDB:240078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_w9i3DxK5tYZ48zzRUjm6Xn
        status: active
        display_name: 王警道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0hTht4F8WWu-8zMbfowOan
        subject_person_id: p_1YwF5L1ETyQWmVhMfdTYHk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oSd16pOU3YBML076NuNf_f
          claim_id: c_0hTht4F8WWu-8zMbfowOan
          source_id: s_MyJAMxpTkx7qsUCBAQ6fkB
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MyJAMxpTkx7qsUCBAQ6fkB
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 240077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240077&o=json
            external_identifier: CBDB:240077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1YwF5L1ETyQWmVhMfdTYHk
        status: active
        display_name: 王尚文
        merged_into_person_id: null
    - claim:
        id: c_Bxtbt1LKv1D1JdFIbpMCWz
        subject_person_id: p_pc4LCZPp8G9LfiCGLBLZBX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9fkGwC7qEo028fIVFUjYd
          claim_id: c_Bxtbt1LKv1D1JdFIbpMCWz
          source_id: s_4todbyzG5q5AkB18diWaKZ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4todbyzG5q5AkB18diWaKZ
            source_type: api_record
            title: 中国历代人物传记资料库：王德成（CBDB 240076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240076&o=json
            external_identifier: CBDB:240076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pc4LCZPp8G9LfiCGLBLZBX
        status: active
        display_name: 王德成
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瓖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓖 | accepted |
| birth.date | 1421年 | accepted |
| bio.summary | 王瓖（生于1421年），明人物。明清進士進士，籍贯襄城，入仕進士。（中国历代人物传记资料库 CBDB 338696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w9i3DxK5tYZ48zzRUjm6Xn | 王警道 | accepted |
| ancestors | p_1YwF5L1ETyQWmVhMfdTYHk | 王尚文 | accepted |
| ancestors | p_pc4LCZPp8G9LfiCGLBLZBX | 王德成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德成（CBDB 240076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240076&o=json)
- [中国历代人物传记资料库：王警道（CBDB 240078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240078&o=json)
- [中国历代人物传记资料库：王尚文（CBDB 240077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240077&o=json)
- [中国历代人物传记资料库：王瓖（CBDB 338696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338696&o=json)
