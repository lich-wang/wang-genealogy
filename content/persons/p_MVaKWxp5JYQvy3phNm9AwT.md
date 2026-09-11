---
schema: wang-person/v1
id: p_MVaKWxp5JYQvy3phNm9AwT
status: active
merged_into: null
display_name: 王銓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvxEDuLT2VN1F5mJwW5ceX
        subject_person_id: p_MVaKWxp5JYQvy3phNm9AwT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TyNFyZBVawsvAqEN5JNdJk
          claim_id: c_YvxEDuLT2VN1F5mJwW5ceX
          source_id: s_r9iRprbkooFJw1n3D2hDzz
          stance: supports
          locator: CBDB:691797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691797）
          source: &a1
            id: s_r9iRprbkooFJw1n3D2hDzz
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 691797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691797&o=json
            external_identifier: CBDB:691797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eiCnWTFtEKCj93gA2hYQQi
        subject_person_id: p_MVaKWxp5JYQvy3phNm9AwT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王銓，明人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 691797）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DHNXbX3C6IzyhIjXalxltq
          claim_id: c_eiCnWTFtEKCj93gA2hYQQi
          source_id: s_r9iRprbkooFJw1n3D2hDzz
          stance: supports
          locator: CBDB:691797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_5UK4yum3qfMC7B8J5R5943
        status: active
        display_name: 王玉貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 691797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5UK4yum3qfMC7B8J5R5943 | 王玉貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 691797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691797&o=json)
- [中国历代人物传记资料库：王玉貞（CBDB 691796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691796&o=json)
