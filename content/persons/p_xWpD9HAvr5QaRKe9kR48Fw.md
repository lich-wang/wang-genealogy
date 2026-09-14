---
schema: wang-person/v1
id: p_xWpD9HAvr5QaRKe9kR48Fw
status: active
merged_into: null
display_name: 王之屏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wcZNfy2JYChK823vjpqJ6P
        subject_person_id: p_xWpD9HAvr5QaRKe9kR48Fw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hd3hFkC5byP2wK77ZNBYBh
          claim_id: c_wcZNfy2JYChK823vjpqJ6P
          source_id: s_mWUpTxDwgqtoQsSit4EvPi
          stance: supports
          locator: CBDB:227719
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227719）
          source: &a1
            id: s_mWUpTxDwgqtoQsSit4EvPi
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 227719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json
            external_identifier: CBDB:227719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VBmWdS1MVDzBoZAZ6v1CBF
        subject_person_id: p_xWpD9HAvr5QaRKe9kR48Fw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之屏，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227719）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vSw9C_vZc-UZ2yamwVOQ7l
          claim_id: c_VBmWdS1MVDzBoZAZ6v1CBF
          source_id: s_mWUpTxDwgqtoQsSit4EvPi
          stance: supports
          locator: CBDB:227719
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jp6L84ml3DLRFnT7T8Ysan
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xWpD9HAvr5QaRKe9kR48Fw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7aGSI3_YVaAA2F7mshhE0
          claim_id: c_Jp6L84ml3DLRFnT7T8Ysan
          source_id: s_x1H70BrUsGna9fTdONnYMu
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之屏 与 王之翰 为同胞（CBDB 记「兄」），王之翰 之父／母即 王之屏 之父／母。
          source:
            id: s_x1H70BrUsGna9fTdONnYMu
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 227719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json
            external_identifier: CBDB:227719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hfNqr6f1P7uM2hMBq7xoJD
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qA9QFgL-itH2WIQkTJpMJw
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xWpD9HAvr5QaRKe9kR48Fw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiddxjnrttEXSQDEK3pgfh
          claim_id: c_qA9QFgL-itH2WIQkTJpMJw
          source_id: s_x1H70BrUsGna9fTdONnYMu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x1H70BrUsGna9fTdONnYMu
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 227719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json
            external_identifier: CBDB:227719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
---

# 王之屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之屏 | accepted |
| bio.summary | 王之屏，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227719） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hfNqr6f1P7uM2hMBq7xoJD | 王崇 | accepted |
| other | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之屏（CBDB 227719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json)
