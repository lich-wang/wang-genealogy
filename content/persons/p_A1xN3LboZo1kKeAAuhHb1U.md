---
schema: wang-person/v1
id: p_A1xN3LboZo1kKeAAuhHb1U
status: active
merged_into: null
display_name: 王銘貴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrSNcuoJT5QeiHRVtJoQRE
        subject_person_id: p_A1xN3LboZo1kKeAAuhHb1U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HSZA4TBxQeDLDNvoaxBFrW
          claim_id: c_PrSNcuoJT5QeiHRVtJoQRE
          source_id: s_F1cTrZfbTZuuVzW9LiMAZd
          stance: supports
          locator: CBDB:640564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640564）
          source: &a1
            id: s_F1cTrZfbTZuuVzW9LiMAZd
            source_type: api_record
            title: 中国历代人物传记资料库：王銘貴（CBDB 640564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640564&o=json
            external_identifier: CBDB:640564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Aw3KnA9Buh7hSPan7MX7Lv
        subject_person_id: p_A1xN3LboZo1kKeAAuhHb1U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘貴，清人物。籍贯山陰，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s4XF1ApamSpd-KPKYTFhRC
          claim_id: c_Aw3KnA9Buh7hSPan7MX7Lv
          source_id: s_F1cTrZfbTZuuVzW9LiMAZd
          stance: supports
          locator: CBDB:640564
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

# 王銘貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘貴 | accepted |
| bio.summary | 王銘貴，清人物。籍贯山陰，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 640564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銘貴（CBDB 640564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640564&o=json)
