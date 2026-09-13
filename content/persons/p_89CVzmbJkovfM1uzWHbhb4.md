---
schema: wang-person/v1
id: p_89CVzmbJkovfM1uzWHbhb4
status: active
merged_into: null
display_name: 周彦先
cbdb_id: 3250
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kAToF0AmhX_TEzFI754R5W
        subject_person_id: p_89CVzmbJkovfM1uzWHbhb4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周彦先，宋人物。籍贯海陵，入仕恩蔭、蔭補，曾任殿中省、右侍禁、巡檢使。（中国历代人物传记资料库 CBDB 3250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tN-Ne-C6Km3TiClyFlsvVI
          claim_id: c_kAToF0AmhX_TEzFI754R5W
          source_id: s_3QT4ZnP4quJ68t1VBMjF9F
          stance: supports
          locator: CBDB:3250
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3QT4ZnP4quJ68t1VBMjF9F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周彥先（3250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3250&o=json
            external_identifier: CBDB:3250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:35.839Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mn6DCUFTRtEXApwtPm7WX3
        subject_person_id: p_89CVzmbJkovfM1uzWHbhb4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周彦先
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CiCqMfLRf7yJ7jkbt8MGbb
          claim_id: c_mn6DCUFTRtEXApwtPm7WX3
          source_id: s_5MXhqNyCLSN4gjKq13DjA3
          stance: supports
          locator: Q45361029
          quotation: null
          interpretation_note: null
          source:
            id: s_5MXhqNyCLSN4gjKq13DjA3
            source_type: api_record
            title: 维基数据：周彦先（Q45361029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45361029
            external_identifier: Q45361029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:35.687Z
            metadata_json: null
        - id: cs_FXrWJ7Vycp3gmQMDQP91cE
          claim_id: c_mn6DCUFTRtEXApwtPm7WX3
          source_id: s_3QT4ZnP4quJ68t1VBMjF9F
          stance: supports
          locator: Q45361029
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PofQmLMj89YpZKsQHh5MqM
        subject_person_id: p_89CVzmbJkovfM1uzWHbhb4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wzKvWDo53UBRUkzm5yDksN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_BabMgJj1UXELv6DoLLwTKg
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_56gWHoLHokafQRXA3gGi64
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_56gWHoLHokafQRXA3gGi64
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5026&o=json
            external_identifier: CBDB:5026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:12.880Z
            metadata_json: null
        - id: cs_YEct9xbGhBTNaid7ep6G5G
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_jeDdSAyJ7vfh56zT6wNp69
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jeDdSAyJ7vfh56zT6wNp69
            source_type: api_record
            title: 维基数据：王氏（Q45363781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363781
            external_identifier: Q45363781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.734Z
            metadata_json: null
        - id: cs_cMz6H6nxnD9H52qExzM8Fq
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_5MXhqNyCLSN4gjKq13DjA3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5MXhqNyCLSN4gjKq13DjA3
            source_type: api_record
            title: 维基数据：周彦先（Q45361029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45361029
            external_identifier: Q45361029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:35.687Z
            metadata_json: null
        - id: cs_UyMMwn5sZxKebudJHqx3b2
          claim_id: c_PofQmLMj89YpZKsQHh5MqM
          source_id: s_3QT4ZnP4quJ68t1VBMjF9F
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_3QT4ZnP4quJ68t1VBMjF9F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周彥先（3250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3250&o=json
            external_identifier: CBDB:3250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:35.839Z
            metadata_json: null
      object_person:
        id: p_wzKvWDo53UBRUkzm5yDksN
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_YwQppHpgZbOkAJqx3-Ygui
        subject_person_id: p_89CVzmbJkovfM1uzWHbhb4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jGAnmRyBAgQe7xAAZpgHkS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KMglGQ_78fokyQ0pkjRLio
          claim_id: c_YwQppHpgZbOkAJqx3-Ygui
          source_id: s_e_pzeeBXoPZCbn9RGoEf7M
          stance: supports
          locator: CBDB 双向互证（妻子 盛氏(周彥先前妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e_pzeeBXoPZCbn9RGoEf7M
            source_type: api_record
            title: 中国历代人物传记资料库：盛氏(周彥先前妻)（CBDB 42631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=42631&o=json
            external_identifier: CBDB:42631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jGAnmRyBAgQe7xAAZpgHkS
        status: active
        display_name: 盛氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周彦先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周彦先，宋人物。籍贯海陵，入仕恩蔭、蔭補，曾任殿中省、右侍禁、巡檢使。（中国历代人物传记资料库 CBDB 3250） | accepted |
| name.primary | 周彦先 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wzKvWDo53UBRUkzm5yDksN | 王氏 | accepted |
| spouses | p_jGAnmRyBAgQe7xAAZpgHkS | 盛氏 | accepted |

## 外部来源

- [维基数据：王氏（Q45363781）](https://www.wikidata.org/wiki/Q45363781)
- [维基数据：周彦先（Q45361029）](https://www.wikidata.org/wiki/Q45361029)
- [中国历代人物传记资料库：盛氏(周彥先前妻)（CBDB 42631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=42631&o=json)
- [CBDB 中国历代人物传记资料库：王氏（5026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5026&o=json)
- [CBDB 中国历代人物传记资料库：周彥先（3250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3250&o=json)
