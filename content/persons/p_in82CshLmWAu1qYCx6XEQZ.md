---
schema: wang-person/v1
id: p_in82CshLmWAu1qYCx6XEQZ
status: active
merged_into: null
display_name: 王珠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h64Z2J7LZKikyAxXmiFeP6
        subject_person_id: p_in82CshLmWAu1qYCx6XEQZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NrNtSfwQ9g24RoCpMYwBwV
          claim_id: c_h64Z2J7LZKikyAxXmiFeP6
          source_id: s_eU7W1fVuyMFMve15CxVGhQ
          stance: supports
          locator: CBDB:639397
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639397）
          source: &a1
            id: s_eU7W1fVuyMFMve15CxVGhQ
            source_type: api_record
            title: 中国历代人物传记资料库：王珠（CBDB 639397）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639397&o=json
            external_identifier: CBDB:639397
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Myqq3Ko5Vme9z6A2m1GvU
        subject_person_id: p_in82CshLmWAu1qYCx6XEQZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珠，清人物。籍贯歷城，曾任經歷、州判。（中国历代人物传记资料库 CBDB 639397）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l7T_7nOaGDWzKg94IqMyqf
          claim_id: c_6Myqq3Ko5Vme9z6A2m1GvU
          source_id: s_eU7W1fVuyMFMve15CxVGhQ
          stance: supports
          locator: CBDB:639397
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

# 王珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珠 | accepted |
| bio.summary | 王珠，清人物。籍贯歷城，曾任經歷、州判。（中国历代人物传记资料库 CBDB 639397） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珠（CBDB 639397）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639397&o=json)
