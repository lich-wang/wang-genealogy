---
schema: wang-person/v1
id: p_Hm3V88FN6A9tNyAEPPeJNy
status: active
merged_into: null
display_name: 王寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wxamc11wkgsuAVkfKGRXfT
        subject_person_id: p_Hm3V88FN6A9tNyAEPPeJNy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uF7Mz9Lx9rYP42QVnmu38T
          claim_id: c_wxamc11wkgsuAVkfKGRXfT
          source_id: s_S6vu6eP8m1LyKtnaU8tmzG
          stance: supports
          locator: CBDB:691325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691325）
          source: &a1
            id: s_S6vu6eP8m1LyKtnaU8tmzG
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 691325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691325&o=json
            external_identifier: CBDB:691325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ugtdGeSVv1jK7urVuC1ZGC
        subject_person_id: p_Hm3V88FN6A9tNyAEPPeJNy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZ5uFB3Se5VyFhtJ1DCmVP
          claim_id: c_ugtdGeSVv1jK7urVuC1ZGC
          source_id: s_S6vu6eP8m1LyKtnaU8tmzG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6inx6qhjvCQo4abCPLk3KU
        subject_person_id: p_Hm3V88FN6A9tNyAEPPeJNy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1588年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b69AtA8iCMQ6YHuBy37Eg1
          claim_id: c_6inx6qhjvCQo4abCPLk3KU
          source_id: s_S6vu6eP8m1LyKtnaU8tmzG
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
        id: c_aUn7h8GZEyR65hBYCRu9xm
        subject_person_id: p_Hm3V88FN6A9tNyAEPPeJNy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王寅（1506年—1588年），明人物。籍贯歙縣，身份为諸宮調與散曲集作家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 691325）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cZpIpUS-SceJpw7K7Zr60g
          claim_id: c_aUn7h8GZEyR65hBYCRu9xm
          source_id: s_S6vu6eP8m1LyKtnaU8tmzG
          stance: supports
          locator: CBDB:691325
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
  other: []
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| birth.date | 1506年 | accepted |
| death.date | 1588年 | accepted |
| bio.summary | 王寅（1506年—1588年），明人物。籍贯歙縣，身份为諸宮調與散曲集作家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 691325） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 691325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691325&o=json)
