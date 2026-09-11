---
schema: wang-person/v1
id: p_dX7u7237Hx16GA83PoAMLv
status: active
merged_into: null
display_name: 王翰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GY1iSpXkUiZjghG2876AFG
        subject_person_id: p_dX7u7237Hx16GA83PoAMLv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sjy3x893DFW5ui3UPahNG9
          claim_id: c_GY1iSpXkUiZjghG2876AFG
          source_id: s_yfWwPARdjiZdsHKeoqPJkS
          stance: supports
          locator: CBDB:11968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（11968）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tht3xYTouYNj7fUxR67qmw
        subject_person_id: p_dX7u7237Hx16GA83PoAMLv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翰，宋人物。籍贯鄄城。（中国历代人物传记资料库 CBDB 11968）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2sYLsjlVJp5AwF-xAidsba
          claim_id: c_tht3xYTouYNj7fUxR67qmw
          source_id: s_yfWwPARdjiZdsHKeoqPJkS
          stance: supports
          locator: CBDB:11968
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f-Rivwzu3JxsygrDlBt_qO
        subject_person_id: p_dX7u7237Hx16GA83PoAMLv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFMVeip8Wfq2QhmszORw89
          claim_id: c_f-Rivwzu3JxsygrDlBt_qO
          source_id: s_KDsX316WevbQFjGFhDcfXS
          stance: supports
          locator: CBDB 双向互证（父 王翰 ⇄ 子 王逵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_KDsX316WevbQFjGFhDcfXS
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 1835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1835&o=json
            external_identifier: CBDB:1835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c1EMkFFpXvJLra5Y2MCWp6
        status: active
        display_name: 王逵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source: *a1
      object_person:
        id: p_eLNzw8ZjpG2HWwHAXGcRbZ
        status: active
        display_name: 王溫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翰 | accepted |
| bio.summary | 王翰，宋人物。籍贯鄄城。（中国历代人物传记资料库 CBDB 11968） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_c1EMkFFpXvJLra5Y2MCWp6 | 王逵 | accepted |
| ancestors | p_eLNzw8ZjpG2HWwHAXGcRbZ | 王溫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 11968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11968&o=json)
- [中国历代人物传记资料库：王逵（CBDB 1835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1835&o=json)
