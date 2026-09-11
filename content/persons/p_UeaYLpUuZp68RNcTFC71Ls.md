---
schema: wang-person/v1
id: p_UeaYLpUuZp68RNcTFC71Ls
status: active
merged_into: null
display_name: 王都
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_66XiRbgVfGZybKPt7VED3Y
        subject_person_id: p_UeaYLpUuZp68RNcTFC71Ls
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X6g7jqpmdhKpcRCtEAXTsn
          claim_id: c_66XiRbgVfGZybKPt7VED3Y
          source_id: s_tbUX9d9nhfYY8CGtwVt57J
          stance: supports
          locator: CBDB:153007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153007）
          source: &a1
            id: s_tbUX9d9nhfYY8CGtwVt57J
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 153007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153007&o=json
            external_identifier: CBDB:153007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HNipvRKVmSAQDJe6S3SRAo
        subject_person_id: p_UeaYLpUuZp68RNcTFC71Ls
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
        - id: cs_YU4THggG1BSAfCgzfywCR5
          claim_id: c_HNipvRKVmSAQDJe6S3SRAo
          source_id: s_tbUX9d9nhfYY8CGtwVt57J
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
        id: c_38uG2wtCOPO28GaNWIHQ9R
        subject_person_id: p_UeaYLpUuZp68RNcTFC71Ls
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pi3jrpykNB14U478pgSEhq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EhycVwnxTZXQu70GDUM6se
          claim_id: c_38uG2wtCOPO28GaNWIHQ9R
          source_id: s_DZX4Y33F85LUjj7GuoCn67
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan160：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DZX4Y33F85LUjj7GuoCn67
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 143744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143744&o=json
            external_identifier: CBDB:143744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pi3jrpykNB14U478pgSEhq
        status: active
        display_name: 王方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Fx8QXqdT1H2Nnx76n52qHM
        subject_person_id: p_UeaYLpUuZp68RNcTFC71Ls
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hJvWmnJiF6iC5f18s19KxT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_bGs9iG5aKctC-Y8uKI_r
          claim_id: c_Fx8QXqdT1H2Nnx76n52qHM
          source_id: s_PTpVrzAkgRNfqABiAB1cLa
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 485：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PTpVrzAkgRNfqABiAB1cLa
            source_type: api_record
            title: 中国历代人物传记资料库：王元琰（CBDB 140751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140751&o=json
            external_identifier: CBDB:140751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hJvWmnJiF6iC5f18s19KxT
        status: active
        display_name: 王元琰
        merged_into_person_id: null
  other: []
---

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pi3jrpykNB14U478pgSEhq | 王方 | accepted |
| descendants | p_hJvWmnJiF6iC5f18s19KxT | 王元琰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 153007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153007&o=json)
- [中国历代人物传记资料库：王方（CBDB 143744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143744&o=json)
- [中国历代人物传记资料库：王元琰（CBDB 140751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140751&o=json)
