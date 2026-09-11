---
schema: wang-person/v1
id: p_eLNzw8ZjpG2HWwHAXGcRbZ
status: active
merged_into: null
display_name: 王溫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cgHUVKZ4voFyWYbtFJshv7
        subject_person_id: p_eLNzw8ZjpG2HWwHAXGcRbZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1CHuxMDnpsxsu6n4Pp6jUg
          claim_id: c_cgHUVKZ4voFyWYbtFJshv7
          source_id: s_3a7Df3aDut5KRW4rmtFFZr
          stance: supports
          locator: CBDB:11967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（11967）
          source: &a1
            id: s_3a7Df3aDut5KRW4rmtFFZr
            source_type: api_record
            title: 中国历代人物传记资料库：王溫（CBDB 11967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11967&o=json
            external_identifier: CBDB:11967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1F8iXtBRq8uE5CGMQcD5FQ
        subject_person_id: p_eLNzw8ZjpG2HWwHAXGcRbZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溫，五代人物。籍贯鄄城。（中国历代人物传记资料库 CBDB 11967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bslzMXl1jAvp8tfMsxTEna
          claim_id: c_1F8iXtBRq8uE5CGMQcD5FQ
          source_id: s_3a7Df3aDut5KRW4rmtFFZr
          stance: supports
          locator: CBDB:11967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
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
        id: c_38ctoXo4o5CJRIFh4lWvsY
        subject_person_id: p_eLNzw8ZjpG2HWwHAXGcRbZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dX7u7237Hx16GA83PoAMLv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UY-RivM_XHeE92quOBQbcP
          claim_id: c_38ctoXo4o5CJRIFh4lWvsY
          source_id: s_yfWwPARdjiZdsHKeoqPJkS
          stance: supports
          locator: CBDB 双向互证（祖父 王溫 ⇄ 孫 王翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_yfWwPARdjiZdsHKeoqPJkS
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 11968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11968&o=json
            external_identifier: CBDB:11968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.572Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dX7u7237Hx16GA83PoAMLv
        status: active
        display_name: 王翰
        merged_into_person_id: null
  other: []
---

# 王溫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溫 | accepted |
| bio.summary | 王溫，五代人物。籍贯鄄城。（中国历代人物传记资料库 CBDB 11967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dX7u7237Hx16GA83PoAMLv | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 11968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11968&o=json)
- [中国历代人物传记资料库：王溫（CBDB 11967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11967&o=json)
