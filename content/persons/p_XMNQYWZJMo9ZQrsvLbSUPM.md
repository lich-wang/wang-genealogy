---
schema: wang-person/v1
id: p_XMNQYWZJMo9ZQrsvLbSUPM
status: active
merged_into: null
display_name: 王延之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2JM62NVUDNex99TMt63iq
        subject_person_id: p_XMNQYWZJMo9ZQrsvLbSUPM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9CnM49yKdmG1Vfxgz95Vi7
          claim_id: c_t2JM62NVUDNex99TMt63iq
          source_id: s_3fZVYZdtDZHfGwqVjMGFLP
          stance: supports
          locator: CBDB:22231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22231）
          source: &a1
            id: s_3fZVYZdtDZHfGwqVjMGFLP
            source_type: api_record
            title: 中国历代人物传记资料库：王延之（CBDB 22231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22231&o=json
            external_identifier: CBDB:22231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WF4CChCtm2DUkkM2a2WLM3
        subject_person_id: p_XMNQYWZJMo9ZQrsvLbSUPM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延之，宋人物。籍贯元城，入仕進士，曾任尚書省工部屯田司郎中。（中国历代人物传记资料库 CBDB 22231）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dllYKS5Zxm0SmoAQFuB9qx
          claim_id: c_WF4CChCtm2DUkkM2a2WLM3
          source_id: s_3fZVYZdtDZHfGwqVjMGFLP
          stance: supports
          locator: CBDB:22231
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
  descendants: []
  other:
    - claim:
        id: c_NWvt1ZIGn7Lk-_by_AUoTQ
        subject_person_id: p_3J4gHjy4oKiDW3hxEF3ccQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XMNQYWZJMo9ZQrsvLbSUPM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_22afeGqyyNKbw62Zp6MeJO
          claim_id: c_NWvt1ZIGn7Lk-_by_AUoTQ
          source_id: s_3--fsgYK60wgaqourLAbn-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22231 王延之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3--fsgYK60wgaqourLAbn-
            source_type: api_record
            title: 中国历代人物传记资料库：王延德（CBDB 1928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1928&o=json
            external_identifier: CBDB:1928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3J4gHjy4oKiDW3hxEF3ccQ
        status: active
        display_name: 王延德
        merged_into_person_id: null
---

# 王延之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延之 | accepted |
| bio.summary | 王延之，宋人物。籍贯元城，入仕進士，曾任尚書省工部屯田司郎中。（中国历代人物传记资料库 CBDB 22231） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_3J4gHjy4oKiDW3hxEF3ccQ | 王延德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延德（CBDB 1928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1928&o=json)
- [中国历代人物传记资料库：王延之（CBDB 22231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22231&o=json)
