---
schema: wang-person/v1
id: p_iN53V4mFM6PKNc4Xcrnzf6
status: active
merged_into: null
display_name: 王敦本
cbdb_id: 236840
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uChMkmsXaZN7ssVHYAHoff
        subject_person_id: p_iN53V4mFM6PKNc4Xcrnzf6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦本，明人物。中国历代人物传记资料库（CBDB）以人物编号 236840 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_u1uzy6jAm2mHcgCV7R0dbe
          claim_id: c_uChMkmsXaZN7ssVHYAHoff
          source_id: s_fDJEuTQeAafAUFqxadFNP3
          stance: supports
          locator: CBDB:236840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_fDJEuTQeAafAUFqxadFNP3
            source_type: api_record
            title: 中国历代人物传记资料库：王敦本（CBDB 236840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236840&o=json
            external_identifier: CBDB:236840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6a2jdkcvoFFnZk46MdKYC5
        subject_person_id: p_iN53V4mFM6PKNc4Xcrnzf6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_opugU84Vn4f4sPHid71WJw
          claim_id: c_6a2jdkcvoFFnZk46MdKYC5
          source_id: s_fDJEuTQeAafAUFqxadFNP3
          stance: supports
          locator: CBDB:236840
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_fDJEuTQeAafAUFqxadFNP3
            source_type: api_record
            title: 中国历代人物传记资料库：王敦本（CBDB 236840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236840&o=json
            external_identifier: CBDB:236840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Z5crrassfcZdayH1hHcx8B
        subject_person_id: p_iN53V4mFM6PKNc4Xcrnzf6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Al9gSo94g0pErXHhHiBF_3
          claim_id: c_Z5crrassfcZdayH1hHcx8B
          source_id: s_2D4p66LisW9zuWaUxemQ21
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2D4p66LisW9zuWaUxemQ21
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 66976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json
            external_identifier: CBDB:66976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
  other: []
---

# 王敦本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敦本，明人物。中国历代人物传记资料库（CBDB）以人物编号 236840 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王敦本 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敦本（CBDB 236840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236840&o=json)
- [中国历代人物传记资料库：王宇（CBDB 66976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66976&o=json)
