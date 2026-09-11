---
schema: wang-person/v1
id: p_9wAPVGy1D3QZqQkHupd1oN
status: active
merged_into: null
display_name: 王承訓
cbdb_id: 166173
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CrurdYBJHEQpHmA3GJQ62c
        subject_person_id: p_9wAPVGy1D3QZqQkHupd1oN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承訓，唐人物。中国历代人物传记资料库（CBDB）以人物编号 166173 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yPXK1oaNX7kkowj5fJiqjc
          claim_id: c_CrurdYBJHEQpHmA3GJQ62c
          source_id: s_Zb8HrtBDTsX7Vey51QZzLq
          stance: supports
          locator: CBDB:166173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Zb8HrtBDTsX7Vey51QZzLq
            source_type: api_record
            title: 中国历代人物传记资料库：王承訓（CBDB 166173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166173&o=json
            external_identifier: CBDB:166173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPK9G5CVoNVZBALXURtjnE
        subject_person_id: p_9wAPVGy1D3QZqQkHupd1oN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PePPQJnej9NLxe42HFGY7w
          claim_id: c_wPK9G5CVoNVZBALXURtjnE
          source_id: s_Zb8HrtBDTsX7Vey51QZzLq
          stance: supports
          locator: CBDB:166173
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_Zb8HrtBDTsX7Vey51QZzLq
            source_type: api_record
            title: 中国历代人物传记资料库：王承訓（CBDB 166173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166173&o=json
            external_identifier: CBDB:166173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LTW4n3-i1UBa8ujffjy1Ic
        subject_person_id: p_9wAPVGy1D3QZqQkHupd1oN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_icFiqV4qE727ZGi81Wiaj9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3n1qhOGNkWb4jsVogLntq
          claim_id: c_LTW4n3-i1UBa8ujffjy1Ic
          source_id: s_5vMiv1iEZEf1ReAx618mW6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5vMiv1iEZEf1ReAx618mW6
            source_type: api_record
            title: 中国历代人物传记资料库：王逸（CBDB 166174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166174&o=json
            external_identifier: CBDB:166174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_icFiqV4qE727ZGi81Wiaj9
        status: active
        display_name: 王逸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_BC7Y9L60eFpVOfsJhE2PNK
        subject_person_id: p_9wAPVGy1D3QZqQkHupd1oN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_M8Qroy5aQXLqDgMFtrbejw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xYEDXhxS8hO54krEpZtcp7
          claim_id: c_BC7Y9L60eFpVOfsJhE2PNK
          source_id: s_Zb8HrtBDTsX7Vey51QZzLq
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe57：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_M8Qroy5aQXLqDgMFtrbejw
        status: active
        display_name: 王叔寧
        merged_into_person_id: null
  other: []
---

# 王承訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承訓，唐人物。中国历代人物传记资料库（CBDB）以人物编号 166173 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王承訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_icFiqV4qE727ZGi81Wiaj9 | 王逸 | accepted |
| descendants | p_M8Qroy5aQXLqDgMFtrbejw | 王叔寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承訓（CBDB 166173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166173&o=json)
- [中国历代人物传记资料库：王逸（CBDB 166174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166174&o=json)
