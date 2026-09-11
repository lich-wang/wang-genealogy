---
schema: wang-person/v1
id: p_WRoi9Ya9i6HJJ1GQCWBks8
status: active
merged_into: null
display_name: 王韶鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ebQTjMhW9gzj9NxL4abJK9
        subject_person_id: p_WRoi9Ya9i6HJJ1GQCWBks8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98WLGGu9Kr63ru73f7aXv6
          claim_id: c_ebQTjMhW9gzj9NxL4abJK9
          source_id: s_f3rtYhaAPHkSpaCC6agPwe
          stance: supports
          locator: CBDB:640859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640859）
          source: &a1
            id: s_f3rtYhaAPHkSpaCC6agPwe
            source_type: api_record
            title: 中国历代人物传记资料库：王韶鈞（CBDB 640859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640859&o=json
            external_identifier: CBDB:640859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.394Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N1YrU8cbtuB1xeA42EQgLF
        subject_person_id: p_WRoi9Ya9i6HJJ1GQCWBks8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶鈞，清人物。籍贯長樂，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640859）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Gwz06SuJcas3wFW2VlzNAU
          claim_id: c_N1YrU8cbtuB1xeA42EQgLF
          source_id: s_f3rtYhaAPHkSpaCC6agPwe
          stance: supports
          locator: CBDB:640859
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

# 王韶鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韶鈞 | accepted |
| bio.summary | 王韶鈞，清人物。籍贯長樂，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640859） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王韶鈞（CBDB 640859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640859&o=json)
