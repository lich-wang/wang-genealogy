---
schema: wang-person/v1
id: p_dFkzc9URqii7PnCrQFe3SM
status: active
merged_into: null
display_name: 王處厚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WqqTKysjPv4UnhNPGVa3Fx
        subject_person_id: p_dFkzc9URqii7PnCrQFe3SM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3XxQjtXpT1uVMPPvphApg
          claim_id: c_WqqTKysjPv4UnhNPGVa3Fx
          source_id: s_pWM213J5e1L7LU1E9ChLzd
          stance: supports
          locator: CBDB:38116
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38116）
          source: &a1
            id: s_pWM213J5e1L7LU1E9ChLzd
            source_type: api_record
            title: 中国历代人物传记资料库：王處厚（CBDB 38116）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38116&o=json
            external_identifier: CBDB:38116
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_j7p3wuiESJTyR5TgFdnxza
        subject_person_id: p_dFkzc9URqii7PnCrQFe3SM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 956年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGwyvcLh2rsLxsvreufy87
          claim_id: c_j7p3wuiESJTyR5TgFdnxza
          source_id: s_pWM213J5e1L7LU1E9ChLzd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2CWLMxudcw9o5ArViWAnYy
        subject_person_id: p_dFkzc9URqii7PnCrQFe3SM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處厚（卒于956年），宋人物。籍贯華陽，身份为詩人，入仕進士。（中国历代人物传记资料库 CBDB 38116）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PpjiyXvwS4pAu5Gd4HRCvf
          claim_id: c_2CWLMxudcw9o5ArViWAnYy
          source_id: s_pWM213J5e1L7LU1E9ChLzd
          stance: supports
          locator: CBDB:38116
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
        id: c_6UeeOBfBcrc4U8LCTW_Ov2
        subject_person_id: p_dFkzc9URqii7PnCrQFe3SM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tAAE6RBrQzSby9N5qxSRzS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VtDuBpLizh0t1CDI82oPeV
          claim_id: c_6UeeOBfBcrc4U8LCTW_Ov2
          source_id: s_78D6z2qWPSfDz17NcvuwwD
          stance: supports
          locator: 宋人傳記資料索引(電子版)，卷二〇一五/四五二頁：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_78D6z2qWPSfDz17NcvuwwD
            source_type: api_record
            title: 中国历代人物传记资料库：王永堅（CBDB 95224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95224&o=json
            external_identifier: CBDB:95224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tAAE6RBrQzSby9N5qxSRzS
        status: active
        display_name: 王永堅
        merged_into_person_id: null
  other: []
---

# 王處厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處厚 | accepted |
| death.date | 956年 | accepted |
| bio.summary | 王處厚（卒于956年），宋人物。籍贯華陽，身份为詩人，入仕進士。（中国历代人物传记资料库 CBDB 38116） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tAAE6RBrQzSby9N5qxSRzS | 王永堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處厚（CBDB 38116）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38116&o=json)
- [中国历代人物传记资料库：王永堅（CBDB 95224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95224&o=json)
