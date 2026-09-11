---
schema: wang-person/v1
id: p_KyufmqFZJX9Ydoj45mR8n2
status: active
merged_into: null
display_name: 王泌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9JJZrKUerUwCmsdD9L6CWD
        subject_person_id: p_KyufmqFZJX9Ydoj45mR8n2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xG8W51tB7GRB4SaF61vB9q
          claim_id: c_9JJZrKUerUwCmsdD9L6CWD
          source_id: s_W3Sd1D7LRdBwcCtQCBwznk
          stance: supports
          locator: CBDB:22045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22045）
          source: &a1
            id: s_W3Sd1D7LRdBwcCtQCBwznk
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 22045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22045&o=json
            external_identifier: CBDB:22045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gUAW5KmSD4NE1TwviJXiy9
        subject_person_id: p_KyufmqFZJX9Ydoj45mR8n2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泌，宋人物。籍贯汝陰，曾任光祿寺丞。（中国历代人物传记资料库 CBDB 22045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pHJlUYlPVCwsGjUSAC0itE
          claim_id: c_gUAW5KmSD4NE1TwviJXiy9
          source_id: s_W3Sd1D7LRdBwcCtQCBwznk
          stance: supports
          locator: CBDB:22045
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
  ancestors:
    - claim:
        id: c_BnHlZXk57fx2m2uevgLCeB
        subject_person_id: p_ckQkehAjm2rn3hFgW1SLDn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KyufmqFZJX9Ydoj45mR8n2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U6TaXCXWS24xgNGXmEGuuG
          claim_id: c_BnHlZXk57fx2m2uevgLCeB
          source_id: s_Sq9mToAc9R7an6v6Qu7tjp
          stance: supports
          locator: CBDB 双向互证（孫 王泌 ⇄ 祖父 王平）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Sq9mToAc9R7an6v6Qu7tjp
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 1856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json
            external_identifier: CBDB:1856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ckQkehAjm2rn3hFgW1SLDn
        status: active
        display_name: 王平
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王泌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泌 | accepted |
| bio.summary | 王泌，宋人物。籍贯汝陰，曾任光祿寺丞。（中国历代人物传记资料库 CBDB 22045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ckQkehAjm2rn3hFgW1SLDn | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泌（CBDB 22045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22045&o=json)
- [中国历代人物传记资料库：王平（CBDB 1856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1856&o=json)
