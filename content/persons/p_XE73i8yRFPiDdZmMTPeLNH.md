---
schema: wang-person/v1
id: p_XE73i8yRFPiDdZmMTPeLNH
status: active
merged_into: null
display_name: 王鑒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6qmZR1JtUkifyH29aLX7B2
        subject_person_id: p_XE73i8yRFPiDdZmMTPeLNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yo2jqR1W3UrFCrhykN9SDJ
          claim_id: c_6qmZR1JtUkifyH29aLX7B2
          source_id: s_PX2Suvp4kqZxfK13Xip14a
          stance: supports
          locator: CBDB:692017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692017）
          source: &a1
            id: s_PX2Suvp4kqZxfK13Xip14a
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 692017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692017&o=json
            external_identifier: CBDB:692017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fFPFDNP6Vswg4FiM1N63YW
        subject_person_id: p_XE73i8yRFPiDdZmMTPeLNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒，宋人物。曾任左班殿直。（中国历代人物传记资料库 CBDB 692017）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yMxBv9IZqath4dVqARfQcL
          claim_id: c_fFPFDNP6Vswg4FiM1N63YW
          source_id: s_PX2Suvp4kqZxfK13Xip14a
          stance: supports
          locator: CBDB:692017
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
        id: c_tndLzIbQTcf_3byTm39mmK
        subject_person_id: p_LWouE38zrijcXXQPG5ma9Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XE73i8yRFPiDdZmMTPeLNH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqsPyAiqyyII66DdAU2jDR
          claim_id: c_tndLzIbQTcf_3byTm39mmK
          source_id: s_PX2Suvp4kqZxfK13Xip14a
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一二三 王貽矩墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LWouE38zrijcXXQPG5ma9Z
        status: active
        display_name: 王貽矩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒 | accepted |
| bio.summary | 王鑒，宋人物。曾任左班殿直。（中国历代人物传记资料库 CBDB 692017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LWouE38zrijcXXQPG5ma9Z | 王貽矩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 692017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692017&o=json)
